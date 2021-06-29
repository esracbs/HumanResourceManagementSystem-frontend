import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Dropdown,Form ,Button, Input, TextArea,  Grid } from 'semantic-ui-react'
import AdvertisementService from "../services/AdvertisementService";
import WorkTypeService from "../services/WorkTypeService";
import CityService from "../services/CityService";
import JobTitleService from "../services/JobTitleService";
import WorkScheduleService from "../services/WorkScheduleService";


const initialValues={
      description: "gerekli",
      jobTitleId: "",
      workHourId: "",
      workTypeId: "",
      quota: "",
      cityId: "",
      minSalary: "",
      maxSalary: "",
      appealExpirationDate: "",
}
   
const JobAdvertAddSchema = Yup.object().shape({
   appealExpirationDate: Yup.date().nullable().required("Bu alanın doldurulması zorunludur"),
     description: Yup.string().required("Bu alanın doldurulması zorunludur"),
     jobTitleId: Yup.string().required("Bu alanın doldurulması zorunludur"),
     workHourId: Yup.string().required("Bu alanın doldurulması zorunludur"),
  //   workTypeId: Yup.string().required("Bu alanın doldurulması zorunludur"),
  //   quota: Yup.string().required("Posizyon sayısı zorunludur").min(1,"Posizyon sayısı 1 den küçük olamaz"),
  //   cityId: Yup.string().required("Bu alanın doldurulması zorunludur"),
     minSalary: Yup.number().min(0,"0 Dan az olamaz"),
  //   maxSalary: Yup.number().min(0,"0 Dan az olamaz")
  });
export default function AddAdvertisement() {
    let jobAdvertisementService=new AdvertisementService();
    const [workSchedules, setWorkSchedules] = useState([]);
    const [workTypes, setWorkTypes] = useState([]);
    const [cities, setCities] = useState([]);
    const [jobTitles, setJobTitles] = useState([]);

    const formik= useFormik({
        initialValues ,
        validationSchema:JobAdvertAddSchema,
        onSubmit:(values) => {
          let newJobAdd={
            city:{
              id:values.cityId
            },
            employer:{
              id:6
            },
            jobtitle:{
              id:values.jobTitleId
            },
            workType:{
              id:values.workTypeId
            },
            appealExpirationDate:values.appealExpirationDate,
            minSalary:values.minSalary,
            maxSalary:values.maxSalary,
            createdDate:"2021-05-05",
            description:values.description,
            quota:values.quota,
            
          }
          jobAdvertisementService.add(newJobAdd).then((result) => console.log(values));
           alert("İlan eklendi onaylandıktan sonra listelenecektir");
        }
        
    });
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    }
  useEffect(() => {
    let workScheduleService = new WorkScheduleService();
    let workTypeService = new WorkTypeService();
    let cityService = new CityService();
    let jobTitleService = new JobTitleService();

    workScheduleService.getAll().then((result) => setWorkSchedules(result.data.data));
    workTypeService.getWorkTypes().then((result) => setWorkTypes(result.data.data));
    cityService.getCities().then((result) => setCities(result.data.data));
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
  }, []);

  const workScheduleOption = workSchedules.map((workSchedule, index) => ({
    key: index,
    text: workSchedule.workHour,
    value: workSchedule.id,
  }));
  const workTypeOption = workTypes.map((workType, index) => ({
    key: index,
    text: workType.workType,
    value: workType.id,
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
              <label>İş Pozisyonu</label>
            <Dropdown 
            clearable item placeholder="İş pozisyonu" search selection
              id="jobTitleId"
              value={formik.values.jobTitleId}
              onChange={(event, data) =>
                handleChangeSemantic(data.value, "jobTitleId")
              }
              options={jobTitleOption}
              />
              {formik.errors.jobTitleId && formik.touched.jobTitleId &&(
                <div className={"ui pointing red basic label"}>
                  {formik.errors.jobTitleId}
                </div>
              )}
              </Form.Field>
              <Form.Field>
              <label>Şehir</label>
                <Dropdown
                  clearable item placeholder="Şehir" search selection
                  id="cityId"
                  onBlur={formik.onBlur}
                  value={formik.values.cityId}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "cityId")
                  }
                  
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
                      id="workTypeId"
                      onBlur={formik.onBlur} 
                      value={formik.values.workTypeId}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "workTypeId")
                      }
                      
                      options={workTypeOption}
                    />
                    {formik.errors.workTypeId && formik.touched.workTypeId && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.workTypeId}
                      </div>
                    )}
                </Form.Field>
                <Form.Field>
                <label>Çalışma Süresi</label>
                    <Dropdown
                      clearable item placeholder="Çalışma Süresi" 
                      selection
                      id="workHourId"
                      onBlur={formik.onBlur}
                      
                      value={formik.values.workScheduleId}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "workHourId")
                      }
                      
                      options={workScheduleOption}
                    />
                    {formik.errors.workHourId && formik.touched.workHourId && (
                      <div className={"ui pointing red basic label"}>{formik.errors.workHourId}</div>
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
                      id="minSalary"
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
                      id="maxSalary" style={{ width: "100%" }} type="number" placeholder="Maaş aralığı MAKSİMUM"
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
                      id="quota"
                      name="quota"
                      error={Boolean(formik.errors.quota)} onChange={formik.handleChange}
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
                      error={Boolean(formik.errors.appealExpirationDate)}
                      onChange={(event, data) =>
                        handleChangeSemantic(data.value, "appealExpirationDate")
                      }
                      value={formik.values.appealExpirationDate} onBlur={formik.handleBlur} name="appealExpirationDate" placeholder="Son başvuru tarihi"
                    />
                    {formik.errors.appealExpirationDate && formik.touched.appealExpirationDate && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.appealExpirationDate}
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
                    onClick={() => console.log(formik.errors)}
                  />
                    
        </Form>
        </div>
    )
}
