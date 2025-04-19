import Follows from "../../models/follows/follows";
import AuthAware from "./AuthAware";

export default class Followservice extends AuthAware {
  async like(vacationId: string): Promise<Follows> {
    const response = await this.axiosInstance.post<Follows>(
      `${import.meta.env.VITE_REST_SERVER_URL}/follows/follow/${vacationId}`
    );
    return response.data;
  }

  async unlike(vacationId: string): Promise<Follows> {
    const response = await this.axiosInstance.delete<Follows>(
      `${import.meta.env.VITE_REST_SERVER_URL}/follows/unfollow/${vacationId}`
    );
    return response.data;
  }

  async getAllFollows(): Promise<Follows[]> {
    const response = await this.axiosInstance.get<Follows[]>(
      `${import.meta.env.VITE_REST_SERVER_URL}/follows/follow`
    );

    return response.data;
  }
}
