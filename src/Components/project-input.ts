import { Component } from "./base-component";
import { autobind } from "../Decorators/autobind";
import { projectState } from "../State/project-state";
import { validatable, validate } from "../Util/validation";

export class ProjectInput extends Component<HTMLDivElement,HTMLFormElement>{
    titleElement: HTMLInputElement;
    descriptionElement: HTMLInputElement;
    personElement: HTMLInputElement;
  
    constructor() {
  
      super("project-input","app","user-input",true)
  
      this.titleElement = this.element.querySelector('#title')! as HTMLInputElement;
      this.descriptionElement = this.element.querySelector('#description')! as HTMLInputElement;
      this.personElement = this.element.querySelector('#people')! as HTMLInputElement;
  
      this.configure();
    }
  
    renderContent(): void {
      
    }
  
    private getInputList(): [string, string, number] | void {
      const title = this.titleElement.value;
      const description = this.descriptionElement.value;
      const person = this.personElement.value;
  
      const titleValidate: validatable = {
        value: title,
        required: true,
        minLength: 5,
      }
  
      const descriptionValidate: validatable = {
        value: description,
        required: true,
        minLength: 5,
      }
  
      const personValidate: validatable = {
        value: person,
        required: true,
        min: 1,
        max: 10,
      }
  
      const validateRes = validate(titleValidate) && validate(descriptionValidate) && validate(personValidate)
  
      if(!validateRes) {
        throw new Error("Invalid Input");
        return;
      } else {
        return [title, description, +person]
      }
  
    }
  
    @autobind
    private submitHandler(event: Event) {
      event.preventDefault();
      console.log(this,"this inside submit function")
      const inputList = this.getInputList()
      if(Array.isArray(inputList)) {
        const [title, description, person] = inputList
        projectState.addProjects(title, description, person)
        console.log(inputList)
      }
    }
  
   configure() {
      this.element.addEventListener("submit",this.submitHandler)
    }
  }