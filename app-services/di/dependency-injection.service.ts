// Our dependency container that holds all our dependencies
const dependencyContainer = {};

/**
 * Simple class to handle dependency injection
 *
 * @export
 * @class DI
 */
export class DI {
  /**
   * All singleton services should apply this class decorator
   *
   * @static
   * @param {string} serviceName
   * @returns
   * @memberof DI
   */
  static Singleton(serviceName: string) {
    return (target: any) => {
      if (!serviceName) throw new Error('Please enter a service name');
      target.diServiceName = serviceName;
    };
  }


  /**
   * Inject Decorator: Inject a singleton instance of a service
   *
   * @export
   * @param {*} service
   * @param {string} [serviceName] If you are using minification, you may need
   *   to pass the service name as a string
   * @returns
   */
  static Inject(service: any, serviceName?: string) {
    return (target: any, propName: string): any => {
      Object.defineProperty(target, propName, {
        get: () => {
          const name = (serviceName) ? serviceName : (service.diServiceName)
          ? service.diServiceName : service.name;
          if (!dependencyContainer[name]) {
            dependencyContainer[name] = new service();
          }
          return dependencyContainer[name];
        }
      });
    };
  }


  /**
   * Set / Override a dependency. Useful when running unit tests
   *
   * @export
   * @param {string} serviceName
   * @param {*} dependencyInstance
   */
  static override(serviceName: string, dependencyInstance: any) {
    dependencyContainer[serviceName] = dependencyInstance;
  }


  /**
   * Get a service, if it does not exist already, we create one
   *
   * @export
   * @param {*} service
   * @param {string} [serviceName]
   * @returns {*}
   */
  static getService(service: any, serviceName?: string): any {
    const name = (serviceName) ? serviceName : (service.diServiceName)
    ? service.diServiceName : service.name;
    if (!dependencyContainer[name] && service) {
      dependencyContainer[name] = new service();
    }
    return dependencyContainer[name];
  }
}
