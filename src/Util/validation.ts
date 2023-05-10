export interface validatable {
    value: string | number;
    required?: boolean;
    minLength?: number;
    maxLength?: number;
    min?: number;
    max?: number
  }

export function validate(props: validatable): boolean {
    let isValid = true;
    if(props.required) {
      isValid = isValid && props.value.toString().trim().length > 0
    }
    if(props.minLength) {
      isValid = isValid && props.value.toString().trim().length >= props.minLength
    }
    if(props.maxLength) {
      isValid = isValid && props.value.toString().trim().length <= props.maxLength
    }
    if(props.min) {
      isValid = isValid && +props.value >= props.min
    }
    if(props.max) {
      isValid = isValid && +props.value <= props.max
    }
    return isValid
  }