/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Components/base-component.ts":
/*!******************************************!*\
  !*** ./src/Components/base-component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nclass Component {\n    constructor(templateId, hostId, elemetId, position) {\n        this.templateElement = document.getElementById(templateId);\n        this.hostElement = document.getElementById(hostId);\n        const importedNode = document.importNode(this.templateElement.content, true);\n        this.element = importedNode.firstElementChild;\n        this.element.id = elemetId;\n        this.elementPosition = position;\n        this.attach();\n    }\n    attach() {\n        this.hostElement.insertAdjacentElement(this.elementPosition ? \"afterbegin\" : \"beforeend\", this.element);\n    }\n}\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Components/base-component.ts?");

/***/ }),

/***/ "./src/Components/project-input.ts":
/*!*****************************************!*\
  !*** ./src/Components/project-input.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectInput\": () => (/* binding */ ProjectInput)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/Components/base-component.ts\");\n/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decorators/autobind */ \"./src/Decorators/autobind.ts\");\n/* harmony import */ var _State_project_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../State/project-state */ \"./src/State/project-state.ts\");\n/* harmony import */ var _Util_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Util/validation */ \"./src/Util/validation.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\nclass ProjectInput extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor() {\n        super(\"project-input\", \"app\", \"user-input\", true);\n        this.titleElement = this.element.querySelector('#title');\n        this.descriptionElement = this.element.querySelector('#description');\n        this.personElement = this.element.querySelector('#people');\n        this.configure();\n    }\n    renderContent() {\n    }\n    getInputList() {\n        const title = this.titleElement.value;\n        const description = this.descriptionElement.value;\n        const person = this.personElement.value;\n        const titleValidate = {\n            value: title,\n            required: true,\n            minLength: 5,\n        };\n        const descriptionValidate = {\n            value: description,\n            required: true,\n            minLength: 5,\n        };\n        const personValidate = {\n            value: person,\n            required: true,\n            min: 1,\n            max: 10,\n        };\n        const validateRes = (0,_Util_validation__WEBPACK_IMPORTED_MODULE_3__.validate)(titleValidate) && (0,_Util_validation__WEBPACK_IMPORTED_MODULE_3__.validate)(descriptionValidate) && (0,_Util_validation__WEBPACK_IMPORTED_MODULE_3__.validate)(personValidate);\n        if (!validateRes) {\n            throw new Error(\"Invalid Input\");\n            return;\n        }\n        else {\n            return [title, description, +person];\n        }\n    }\n    submitHandler(event) {\n        event.preventDefault();\n        console.log(this, \"this inside submit function\");\n        const inputList = this.getInputList();\n        if (Array.isArray(inputList)) {\n            const [title, description, person] = inputList;\n            _State_project_state__WEBPACK_IMPORTED_MODULE_2__.projectState.addProjects(title, description, person);\n            console.log(inputList);\n        }\n    }\n    configure() {\n        this.element.addEventListener(\"submit\", this.submitHandler);\n    }\n}\n__decorate([\n    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind\n], ProjectInput.prototype, \"submitHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Components/project-input.ts?");

/***/ }),

/***/ "./src/Components/project-item.ts":
/*!****************************************!*\
  !*** ./src/Components/project-item.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectItem\": () => (/* binding */ ProjectItem)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/Components/base-component.ts\");\n/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Decorators/autobind */ \"./src/Decorators/autobind.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\nclass ProjectItem extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(hostId, project) {\n        super('single-project', hostId, project.id, false);\n        this.project = project;\n        this.configure();\n        this.renderContent();\n    }\n    get personText() {\n        if (this.project.people === 1) {\n            return \"1 person assigned\";\n        }\n        return `${this.project.people} persons assigned`;\n    }\n    dragStartHandler(event) {\n        console.log(\"inside drag start handler\", this.project.status);\n        event.dataTransfer.setData('text/plain', this.project.id);\n        event.dataTransfer.effectAllowed = \"move\";\n    }\n    dragEndHandler(event) {\n        console.log('DragEnd', event);\n    }\n    configure() {\n        this.element.addEventListener('dragstart', this.dragStartHandler);\n        this.element.addEventListener('dragend', this.dragEndHandler);\n    }\n    renderContent() {\n        this.element.querySelector('h2').textContent = this.project.title;\n        this.element.querySelector('h3').textContent = this.personText;\n        this.element.querySelector('p').textContent = this.project.description;\n    }\n}\n__decorate([\n    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_1__.autobind\n], ProjectItem.prototype, \"dragStartHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Components/project-item.ts?");

/***/ }),

/***/ "./src/Components/project-list.ts":
/*!****************************************!*\
  !*** ./src/Components/project-list.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectList\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base-component */ \"./src/Components/base-component.ts\");\n/* harmony import */ var _project_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project-item */ \"./src/Components/project-item.ts\");\n/* harmony import */ var _Decorators_autobind__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Decorators/autobind */ \"./src/Decorators/autobind.ts\");\n/* harmony import */ var _State_project_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../State/project-state */ \"./src/State/project-state.ts\");\n/* harmony import */ var _Modules_project__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Modules/project */ \"./src/Modules/project.ts\");\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\n\n\n\n\n\nclass ProjectList extends _base_component__WEBPACK_IMPORTED_MODULE_0__.Component {\n    constructor(type) {\n        super('project-list', 'app', `${type}-projects`, false);\n        this.type = type;\n        this.assignedProjects = [];\n        this.configure();\n        this.renderContent();\n    }\n    renderProject() {\n        const listItem = document.getElementById(`${this.type}-projects-list`);\n        listItem.innerHTML = '';\n        for (const prjItem of this.assignedProjects) {\n            new _project_item__WEBPACK_IMPORTED_MODULE_1__.ProjectItem(this.element.querySelector('ul').id, prjItem);\n        }\n    }\n    dragOverHandler(event) {\n        var _a;\n        if (((_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.types[0]) === \"text/plain\") {\n            event.preventDefault();\n            const listEl = this.element.querySelector('ul');\n            listEl.classList.add('droppable');\n        }\n    }\n    dropHandler(event) {\n        const prjId = event.dataTransfer.getData('text/plain');\n        _State_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.moveProject(prjId, this.type === \"active\" ? _Modules_project__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Active : _Modules_project__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Finished);\n    }\n    dragLeaveHandler(_) {\n        const listEl = this.element.querySelector('ul');\n        listEl.classList.remove('droppable');\n    }\n    configure() {\n        this.element.addEventListener('dragover', this.dragOverHandler);\n        this.element.addEventListener('dragleave', this.dragLeaveHandler);\n        this.element.addEventListener('drop', this.dropHandler);\n        _State_project_state__WEBPACK_IMPORTED_MODULE_3__.projectState.addListeners((projects) => {\n            const releventProjects = projects.filter((prj) => {\n                if (this.type === \"active\") {\n                    return prj.status === _Modules_project__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Active;\n                }\n                return prj.status === _Modules_project__WEBPACK_IMPORTED_MODULE_4__.ProjectStatus.Finished;\n            });\n            this.assignedProjects = releventProjects;\n            this.renderProject();\n        });\n    }\n    renderContent() {\n        const listId = `${this.type}-projects-list`;\n        this.element.querySelector('ul').id = listId;\n        this.element.querySelector('h2').textContent = `${this.type.toUpperCase()} PROJECTS`;\n    }\n}\n__decorate([\n    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind\n], ProjectList.prototype, \"dragOverHandler\", null);\n__decorate([\n    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind\n], ProjectList.prototype, \"dropHandler\", null);\n__decorate([\n    _Decorators_autobind__WEBPACK_IMPORTED_MODULE_2__.autobind\n], ProjectList.prototype, \"dragLeaveHandler\", null);\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Components/project-list.ts?");

/***/ }),

/***/ "./src/Decorators/autobind.ts":
/*!************************************!*\
  !*** ./src/Decorators/autobind.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"autobind\": () => (/* binding */ autobind)\n/* harmony export */ });\nfunction autobind(_, _2, descriptor) {\n    const originalMethod = descriptor.value;\n    const adjDescriptor = {\n        configurable: true,\n        get() {\n            const boundfn = originalMethod.bind(this);\n            return boundfn;\n        }\n    };\n    return adjDescriptor;\n}\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Decorators/autobind.ts?");

/***/ }),

/***/ "./src/Modules/project.ts":
/*!********************************!*\
  !*** ./src/Modules/project.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Project\": () => (/* binding */ Project),\n/* harmony export */   \"ProjectStatus\": () => (/* binding */ ProjectStatus)\n/* harmony export */ });\nvar ProjectStatus;\n(function (ProjectStatus) {\n    ProjectStatus[ProjectStatus[\"Active\"] = 0] = \"Active\";\n    ProjectStatus[ProjectStatus[\"Finished\"] = 1] = \"Finished\";\n})(ProjectStatus || (ProjectStatus = {}));\nclass Project {\n    constructor(id, title, description, people, status) {\n        this.id = id;\n        this.title = title;\n        this.description = description;\n        this.people = people;\n        this.status = status;\n    }\n}\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Modules/project.ts?");

/***/ }),

/***/ "./src/State/project-state.ts":
/*!************************************!*\
  !*** ./src/State/project-state.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ProjectState\": () => (/* binding */ ProjectState),\n/* harmony export */   \"projectState\": () => (/* binding */ projectState)\n/* harmony export */ });\n/* harmony import */ var _Modules_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modules/project */ \"./src/Modules/project.ts\");\n\nclass ProjectState {\n    constructor() {\n        this.projects = [];\n        this.listeners = [];\n    }\n    static getInstance() {\n        if (this.instance) {\n            return this.instance;\n        }\n        this.instance = new ProjectState();\n        return this.instance;\n    }\n    addListeners(listernerFn) {\n        this.listeners.push(listernerFn);\n    }\n    addProjects(title, description, noOfPeople) {\n        const prjObj = new _Modules_project__WEBPACK_IMPORTED_MODULE_0__.Project(Math.random().toString(), title, description, noOfPeople, _Modules_project__WEBPACK_IMPORTED_MODULE_0__.ProjectStatus.Active);\n        this.projects.push(prjObj);\n        this.updateListener();\n    }\n    moveProject(projectId, newStatus) {\n        const prjEl = this.projects.find(prj => prj.id === projectId);\n        console.log(newStatus, \"newstatus inside moveproject\");\n        if (prjEl && prjEl.status !== newStatus) {\n            prjEl.status = newStatus;\n            console.log(prjEl);\n            this.updateListener();\n        }\n    }\n    updateListener() {\n        for (const listenerfn of this.listeners) {\n            listenerfn(this.projects.slice());\n        }\n    }\n}\nconst projectState = ProjectState.getInstance();\n\n\n//# sourceURL=webpack://understanding-typescript/./src/State/project-state.ts?");

/***/ }),

/***/ "./src/Util/validation.ts":
/*!********************************!*\
  !*** ./src/Util/validation.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"validate\": () => (/* binding */ validate)\n/* harmony export */ });\nfunction validate(props) {\n    let isValid = true;\n    if (props.required) {\n        isValid = isValid && props.value.toString().trim().length > 0;\n    }\n    if (props.minLength) {\n        isValid = isValid && props.value.toString().trim().length >= props.minLength;\n    }\n    if (props.maxLength) {\n        isValid = isValid && props.value.toString().trim().length <= props.maxLength;\n    }\n    if (props.min) {\n        isValid = isValid && +props.value >= props.min;\n    }\n    if (props.max) {\n        isValid = isValid && +props.value <= props.max;\n    }\n    return isValid;\n}\n\n\n//# sourceURL=webpack://understanding-typescript/./src/Util/validation.ts?");

/***/ }),

/***/ "./src/app.ts":
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_project_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/project-input */ \"./src/Components/project-input.ts\");\n/* harmony import */ var _Components_project_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/project-list */ \"./src/Components/project-list.ts\");\n\n\nnew _Components_project_input__WEBPACK_IMPORTED_MODULE_0__.ProjectInput();\nnew _Components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('active');\nnew _Components_project_list__WEBPACK_IMPORTED_MODULE_1__.ProjectList('finished');\n\n\n//# sourceURL=webpack://understanding-typescript/./src/app.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.ts");
/******/ 	
/******/ })()
;