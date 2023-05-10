import { Component } from "./base-component";
import { Project } from "../Modules/project";
import { DragTarget } from "../Modules/drag-drop";
import { ProjectItem } from "./project-item";
import { autobind } from "../Decorators/autobind";
import { projectState } from "../State/project-state";
import { ProjectStatus } from "../Modules/project";

export class ProjectList extends Component<HTMLDivElement, HTMLFormElement> implements DragTarget {
    assignedProjects: Project[];
  
    constructor(private type: 'active' | 'finished') {
      super('project-list','app',`${type}-projects`,false)
      this.assignedProjects = []
      this.configure();
      this.renderContent();
    }
  
    private renderProject () {
      const listItem = document.getElementById(`${this.type}-projects-list`)!;
      listItem.innerHTML=''
      for(const prjItem of this.assignedProjects) {
        new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
      }
    }
  
    @autobind
    dragOverHandler(event: DragEvent) {
      if(event.dataTransfer?.types[0] === "text/plain") {
        event.preventDefault()
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.add('droppable');
      }
    }
  
    @autobind
    dropHandler(event: DragEvent) {
      const prjId = event.dataTransfer!.getData('text/plain')
      projectState.moveProject(prjId, this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished)
    }
  
    @autobind
    dragLeaveHandler(_: DragEvent) {
        const listEl = this.element.querySelector('ul')!;
        listEl.classList.remove('droppable');
    }
  
    configure() {
      this.element.addEventListener('dragover', this.dragOverHandler);
      this.element.addEventListener('dragleave', this.dragLeaveHandler);
      this.element.addEventListener('drop', this.dropHandler);
  
      projectState.addListeners((projects: Project[])=>{
        const releventProjects = projects.filter((prj) => {
          if(this.type === "active") {
            return prj.status === ProjectStatus.Active;
          }
          return prj.status === ProjectStatus.Finished;
        })
        this.assignedProjects = releventProjects;
        this.renderProject()
      })
    }
  
    renderContent () {
      const listId = `${this.type}-projects-list`;
      this.element.querySelector('ul')!.id = listId;
      this.element.querySelector('h2')!.textContent = `${this.type.toUpperCase()} PROJECTS`;
    }
  
  
  }