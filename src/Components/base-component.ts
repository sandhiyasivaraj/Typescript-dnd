export abstract class Component<T extends HTMLElement, U extends  HTMLElement> {
    templateElement: HTMLTemplateElement;
    hostElement: T;
    element: U;
    elementPosition: boolean;
  
    constructor(templateId: string, hostId: string, elemetId: string, position: boolean) {
      this.templateElement = document.getElementById(
        templateId
      )! as HTMLTemplateElement;
      this.hostElement = document.getElementById(hostId)! as T;
      const importedNode = document.importNode(
        this.templateElement.content,
        true
      );
      this.element = importedNode.firstElementChild as U;
      this.element.id = elemetId
      this.elementPosition = position
  
      this.attach();
    }
  
      private attach() {
        this.hostElement.insertAdjacentElement( this.elementPosition ? "afterbegin" : "beforeend", this.element)
      }
  
      abstract configure(): void;
      abstract renderContent(): void;
  
  }