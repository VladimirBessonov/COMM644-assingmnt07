import Model from "./mvc/Model";
import View from "./mvc/View";
import Controller from "./mvc/Controller";

export const app = new Controller(new Model(), new View())