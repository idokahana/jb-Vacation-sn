import { useForm } from "react-hook-form";
import "./NewVacation.css";

import { ChangeEvent, useState } from "react";
import VacationDraft from "../../models/vacation/VacationDraft";
import useService from "../../hooks/useService";
import VacationService from "../../services/auth-aware/Vacations";
import { useNavigate } from "react-router-dom";

export default function NewVacation(): JSX.Element {
  const { register, handleSubmit, formState } = useForm<VacationDraft>();

  const [previewImageSrc, setPreviewImageSrc] = useState<string>("");

  const newVacationService = useService(VacationService);
  const navigate = useNavigate();
  async function submit(draft: VacationDraft) {
    try {
      draft.postImage = (draft.postImage as unknown as FileList)[0];

      await newVacationService.createNewVacation(draft);
      setPreviewImageSrc("");
      navigate("/vacation");
    } catch (e) {
      alert(e);
    }
  }

  function previewImage(event: ChangeEvent<HTMLInputElement>) {
    const file = event.currentTarget.files && event.currentTarget.files[0];
    if (file) {
      const imageSource = URL.createObjectURL(file);
      setPreviewImageSrc(imageSource);
    }
  }
  return (
    <div className="newVacation">
      <form className="editVacation-form" onSubmit={handleSubmit(submit)}>
        <label className="editVacation-label">Destination</label>
        <input
          className="editVacation-input"
          placeholder="destination"
          {...register("destination", {
            required: {
              value: true,
              message: "you must provide a destination",
            },
            minLength: {
              value: 3,
              message: "destination must be 3 chars long",
            },
            maxLength: {
              value: 50,
              message: "Destination cannot exceed 50 characters.",
            },
          })}
        />
        <span className="error">{formState.errors.destination?.message}</span>
        <label className="editVacation-label">Vacation Description</label>
        <textarea
          className="editVacation-input"
          placeholder="Vacation Description"
          {...register("vacationDescription", {
            required: {
              value: true,
              message: "you must provide a body",
            },
            minLength: {
              value: 10,
              message: "body must be 10 chars long",
            },
            maxLength: {
              value: 255,
              message: "Destination cannot exceed 255 characters.",
            },
          })}
        />
        <span className="error">
          {formState.errors.vacationDescription?.message}
        </span>
        <label className="editVacation-label">Starting Date</label>
        <input
          className="editVacation-input"
          type="date"
          placeholder="Starting Date"
          {...register("startingDate", {
            required: {
              value: true,
              message: "you must provide a starting Date",
            },
          })}
        />
        <span className="error">{formState.errors.startingDate?.message}</span>
        <label className="editVacation-label">Ending Date</label>
        <input
          className="editVacation-input"
          type="date"
          placeholder="ending date Date"
          {...register("endingDate", {
            required: {
              value: true,
              message: "you must provide a ending  Date",
            },
          })}
        />
        <span className="error">{formState.errors.endingDate?.message}</span>
        <label className="editVacation-label">Price</label>
        <input
          className="editVacation-input"
          type="number"
          placeholder="price"
          {...register("price", {
            required: {
              value: true,
              message: "you must provide a Date",
            },
          })}
        />
        <span className="error">{formState.errors.price?.message}</span>
        <label className="editVacation-label">add a picture</label>
        <input
          className="editVacation-input"
          type="file"
          accept="image/png, image/jpeg, image/jpg"
          {...register("postImage")}
          onChange={previewImage}
        />
        {previewImageSrc && <img src={previewImageSrc} />}
        <span className="error">{formState.errors.postImage?.message}</span>
        <button className="editVacation-btn">Post Vacation</button>
      </form>
    </div>
  );
}
