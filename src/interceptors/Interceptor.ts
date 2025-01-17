import { frozen } from '../core/utils';

export default abstract class Interceptor<T extends Object> {
  #isInterceptorEnabled = false;

  get isInterceptorEnabled() {
    return this.#isInterceptorEnabled;
  }

  protected set isInterceptorEnabled(value: boolean) {
    this.#isInterceptorEnabled = value;
  }

  protected abstract handlers: T;

  @frozen
  set<K extends keyof T>(key: K, handler: T[K]) {
    this.handlers[key] ??= handler;
    return this;
  }

  abstract enableInterception(): void;
  abstract disableInterception(): void;
}
