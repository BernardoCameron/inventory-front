import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const base_url = "http://localhost:8080/api/v1";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  /**
   * get all categories
   */
  getCategories() {

    const endpoint = `${base_url}/categories`;
    return this.http.get(endpoint)

  }

  /**
   * save categories
   */

  saveCategorie(body: any) {
    const endpoint = `${base_url}/categories`
    return this.http.post(endpoint, body)
  }

  /**
   * update categories
   */

  updateCategorie(body: any, id: any) {
    const endpoint = `${base_url}/categories/${id}`
    return this.http.put(endpoint, body)
  }

  /**
   * deleteCategory
   */
  deleteCategorie(id: any) {
    const endpoint = `${base_url}/categories/${id}`
    return this.http.delete(endpoint)
  }
  /**
   * buscar categoria
   */
  getCategorieById(id: any) {
    const endpoint = `${base_url}/categories/${id}`
    return this.http.get(endpoint)
  }
}
