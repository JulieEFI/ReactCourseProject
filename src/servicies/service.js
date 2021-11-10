import http from "./apis/ageOfEmpAPI";

class DataService {
  getCivilizations() {
    return http.get("/civilizations");
  }
  getStructures() {
    return http.get("/structures");
  }
  getTechnologies() {
    return http.get("/technologies");
  }
  getUnits() {
    return http.get("/units");
  }

}

export default new DataService();