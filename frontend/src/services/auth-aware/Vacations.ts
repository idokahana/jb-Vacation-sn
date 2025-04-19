import VacationDraft from "../../models/vacation/VacationDraft";
import VacationModel from "../../models/vacation/VacationModel";
import AuthAware from "./AuthAware";

export default class VacationService extends AuthAware {
  async getAllVacation(): Promise<VacationModel[]> {
    const response = await this.axiosInstance.get<VacationModel[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/vacation`
    );
    return response.data;
  }

  async createNewVacation(draft: VacationDraft): Promise<VacationModel> {
    const response = await this.axiosInstance.post<VacationModel>(
      `${import.meta.env.VITE_REST_SERVER_URL}/vacation`,
      draft,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }

  async remove(vacationId: string): Promise<boolean> {
    const response = await this.axiosInstance.delete<boolean>(
      `${import.meta.env.VITE_REST_SERVER_URL}/vacation/${vacationId}`
    );
    return response.data;
  }

  async update(
    vacationId: string,
    draft: VacationDraft
  ): Promise<VacationModel> {
    const response = await this.axiosInstance.patch<VacationModel>(
      `${import.meta.env.VITE_REST_SERVER_URL}/vacation/${vacationId}`,
      draft,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return response.data;
  }
}
