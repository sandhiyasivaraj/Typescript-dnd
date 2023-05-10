import { Project, ProjectStatus } from "../Modules/project";

export type listenerfn = (item: Project[])=>void

export class ProjectState {
  private projects: Project[] = [];
  private listeners: any[] = [];
  private static instance: ProjectState

  static getInstance() {
    if(this.instance) {
      return this.instance
    }
    this.instance = new ProjectState();
    return this.instance
  }

  addListeners(listernerFn: listenerfn){
    this.listeners.push(listernerFn)
  }

  addProjects(title: string, description: string, noOfPeople: number) {
    const prjObj = new Project(
        Math.random().toString(),
        title,
        description,
        noOfPeople,
        ProjectStatus.Active
    )
    this.projects.push(prjObj)
      this.updateListener()
  }

  moveProject(projectId: string, newStatus: ProjectStatus) {
    const prjEl = this.projects.find(prj => prj.id === projectId)
    console.log(newStatus, "newstatus inside moveproject")
    if(prjEl && prjEl.status !== newStatus) {
      prjEl.status = newStatus
      console.log(prjEl)
      this.updateListener()
    }
  }

  updateListener(){
    for(const listenerfn of this.listeners) {
      listenerfn(this.projects.slice())
    }
  }
}
export const projectState = ProjectState.getInstance();