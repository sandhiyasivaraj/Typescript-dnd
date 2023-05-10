import { Component } from "./base-component";
import { Project } from "../Modules/project";
import { Draggable } from "../Modules/drag-drop";
import { autobind } from "../Decorators/autobind";

export class ProjectItem extends Component<HTMLUListElement, HTMLLIElement> implements Draggable{
    private project: Project;
    constructor(hostId: string, project: Project){
      super('single-project', hostId, project.id, false);
      this.project = project
      this.configure();
      this.renderContent();
    }
  
    get personText (){
      if(this.project.people === 1) {
        return "1 person assigned"
      }
      return `${this.project.people} persons assigned`
    }
  
    @autobind
    dragStartHandler(event: DragEvent) {
      console.log("inside drag start handler", this.project.status)
      event.dataTransfer!.setData('text/plain', this.project.id);
      event.dataTransfer!.effectAllowed = "move"
      
    }
  
    dragEndHandler(event: DragEvent) {
      console.log('DragEnd',event);
    }
  
    configure() {
      this.element.addEventListener('dragstart', this.dragStartHandler);
      this.element.addEventListener('dragend', this.dragEndHandler);
    }
    renderContent(): void {
      this.element.querySelector('h2')!.textContent = this.project.title;
      this.element.querySelector('h3')!.textContent = this.personText;
      this.element.querySelector('p')!.textContent = this.project.description;
    }
  }