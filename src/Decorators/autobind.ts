export function autobind(_:any, _2: string, descriptor: PropertyDescriptor){
    const originalMethod = descriptor.value
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundfn = originalMethod.bind(this);
        return boundfn
      }
    }
    return adjDescriptor
  }