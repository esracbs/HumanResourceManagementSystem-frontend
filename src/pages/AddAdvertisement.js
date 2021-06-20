import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dropdown,Form ,Button, Input, TextArea, Card, Grid } from 'semantic-ui-react'
import AdvertisementService from "../services/AdvertisementService";
import WorkPlaceService from "../services/WorkPlaceService";
import CityService from "../services/CityService";
import JobTitleService from "../services/JobTitleService";
import WorkScheduleService from "../services/WorkScheduleService";


const initialValues={
    description: "",
      jobPositionId: "",
      workTimeId: "",
      workPlaceId: "",
      openPositions: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      lastDate: "",
}
    const onSubmit=values => {
      values.employerId = 4;
    //   AdvertisementService.add(values).then((result) => console.log(result.data.data));
    //   alert("İlan eklendi onaylandıktan sonra listelenecektir");
    }
const JobAdvertAddSchema = Yup.object().shape({
    lastDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
    description: Yup.string().required("Bu alanın doldurulması zorunludur"),
    jobPositionId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workTimeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    workPlaceId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    openPositions: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
    cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
    minSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur"),
    maxSalary: Yup.number().min(0,"0 Dan az olamaz").required("Bu alan zorunludur")
  });
export default function AddAdvertisement() {
    const formik= useFormik({
        initialValues ,
           onSubmit,
           JobAdvertAddSchema 
    });
    const handleChangeSemantic = (value, fieldName) => {
        formik.setFieldValue(fieldName, value);
      }


      const [workSchedules, setWorkSchedules] = useState([]);
        const [workPlaces, setWorkPlaces] = useState([]);
        const [cities, setCities] = useState([]);
        const [jobTitles, setJobTitles] = useState([]);

  useEffect(() => {
    let workScheduleService = new WorkScheduleService();
    let workPlaceService = new WorkPlaceService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workScheduleService.getAll().then((result) => setWorkSchedules(result.data.data));
    workPlaceService.getWorkPlaces().then((result) => setWorkPlaces(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
  }, []);

  const workScheduleOption = workSchedules.map((workSchedule, index) => ({
    key: index,
    text: workSchedule.workHour,
    value: workSchedule.id,
  }));
  const workPlaceOption = workPlaces.map((workPlace, index) => ({
    key: index,
    text: workPlace.workType,
    value: workPlace.id,
  }));
  const cityOption = cities.map((city, index) => ({
    key: index,
    text: city.cityName,
    value: city.id,
  }));
  const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
  }));
    return (
        <div>
            <Form onSubmit={formik.handleSubmit}>
        <Form.Field style={{marginBottom: "1rem"}}>
          <label>İş Posisyonu</label>
        <Dropdown
         clearable item placeholder="İş pozisyonu" search selection
          onChange={(event, data) =>
            handleChangeSemantic(data.value, "jobPositionId")
          }
          onBlur={formik.onBlur}
          id="jobPositionId"
          value={formik.values.jobPositionId}
          options={jobTitleOption}
          />
          {formik.errors.jobPositionId && formik.touched.jobPositionId &&(
            <div className={"ui pointing red basic label"}>
              {formik.errors.jobPositionId}
            </div>
          )}
          </Form.Field>
          <Form.Field>
          <label>Şehir</label>
            <Dropdown
              clearable item placeholder="Şehir" search selection
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "cityId")
              }
              onBlur={formik.onBlur}
              id="cityId"
              value={formik.values.cityId}
              options={cityOption}
              />
              {formik.errors.cityId && formik.touched.cityId && (
                <div className={"ui pointing red basic label"}>
                {formik.errors.cityId}
              </div>
              )}
          </Form.Field>
          <Form.Field>
          <label>Çalışma yeri</label>
          <Dropdown
                  clearable item placeholder="Çalışma yeri" search selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workPlaceId")
                  }
                  onBlur={formik.onBlur} id="workPlaceId"
                  value={formik.values.workPlaceId}
                  options={workPlaceOption}
                />
                {formik.errors.workPlaceId && formik.touched.workPlaceId && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.workPlaceId}
                  </div>
                )}
            </Form.Field>
            <Form.Field>
            <label>Çalışma Süresi</label>
                <Dropdown
                  clearable item placeholder="Çalışma Süresi" 
                  selection
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workTimeId")
                  }
                  onBlur={formik.onBlur}
                  id="workTimeId"
                  value={formik.values.workScheduleId}
                  options={workScheduleOption}
                />
                {formik.errors.workTimeId && formik.touched.workTimeId && (
                  <div className={"ui pointing red basic label"}>{formik.errors.workTimeId}</div>
                )}
              </Form.Field>
              <Form.Field>
              <Grid>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Maaş aralığı MİNİMUM</label>
                <Input
                  style={{ width: "100%" }}
                  type="number"
                  placeholder="Maaş aralığı MİNİMUM"
                  value={formik.values.minSalary}
                  name="minSalary"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.minSalary && formik.touched.minSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.minSalary}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Maaş aralığı MAKSİMUM</label>
                <Input
                  style={{ width: "100%" }} type="number" placeholder="Maaş aralığı MAKSİMUM"
                  value={formik.values.maxSalary} name="maxSalary"
                  onChange={formik.handleChange} onBlur={formik.handleBlur}
                >
                </Input>
                {formik.errors.maxSalary && formik.touched.maxSalary && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.maxSalary}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <Grid>
              <Grid.Column width={8}>
              <label style={{fontWeight: "bold"}}>Açık Pozisyon sayısı</label>
                <Input
                  id="openPositions"
                  name="openPositions"
                  error={Boolean(formik.errors.openPositions)} onChange={formik.handleChange}
                  value={formik.values.openPositions} onBlur={formik.handleBlur}
                  type="number" placeholder="Açık Pozisyon sayısı"
                />
                {formik.errors.openPositions && formik.touched.openPositions && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.openPositions}
                  </div>
                )}
                </Grid.Column>
                <Grid.Column width={8}>
                <label style={{fontWeight: "bold"}}>Son başvuru tarihi</label>
                <Input
                  style={{ width: "100%" }}
                  type="date"
                  error={Boolean(formik.errors.lastDate)}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "lastDate")
                  }
                  value={formik.values.lastDate} onBlur={formik.handleBlur} name="lastDate" placeholder="Son başvuru tarihi"
                />
                {formik.errors.lastDate && formik.touched.lastDate && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.lastDate}
                  </div>
                )}
                </Grid.Column>
                </Grid>
              </Form.Field>

              <Form.Field>
              <label>Açıklama</label>
                <TextArea
                  placeholder="Açıklama"
                  error={Boolean(formik.errors.description).toString()}
                  value={formik.values.description}
                  name="description"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                {formik.errors.description && formik.touched.description && (
                  <div className={"ui pointing red basic label"}>
                    {formik.errors.description}
                  </div>
                )}
              </Form.Field>
              <Button
                content="Ekle"
                icon="add"
                positive
                type="submit"
              />
                
            </Form>
        </div>
    )
}
