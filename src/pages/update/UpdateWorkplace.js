import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Dropdown,Form , Button} from 'semantic-ui-react'
import WorkplaceCandidateService from "../../services/WorkplaceCandidateService";
import WorkplaceService from "../../services/WorkplaceService";
import JobTitleService from "../../services/JobTitleService";

const initialValues= {
    dateOfEntry: "",
    dateOfQuit: "",
    workplaceId: "",
  }
   
export default function UpdateWorkplace(props) {
    let workplaceCandidateService=new WorkplaceCandidateService();
    const [workplaces,setWorkplaces]=useState([]);
    const [jobTitles, setJobTitles] = useState([]);    
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            let newWorkplace = {
                workplace:{
                    id:values.workplaceId
                },
                dateOfEntry: values.dateOfEntry,
                dateOfQuit: values.dateOfQuit,
                candidate: {
                    id: 4,
                },
                jobtitle:{
                    id:values.jobTitleId
                },
            };
            workplaceCandidateService.update(newWorkplace, props.id).then((result) => console.log(newWorkplace));
            alert("İlan eklendi onaylandıktan sonra listelenecektir");
        },
    });
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    }
  useEffect(() => {
    let workplaceService=new WorkplaceService();
    let jobTitleService = new JobTitleService();
    workplaceService.getWorkplaces().then((result) => setWorkplaces(result.data.data));
    jobTitleService.getJobTitles().then((result) => setJobTitles(result.data.data));
}, []);
    const workplaceOption = workplaces.map((workplace, index) => ({
        key: index,
        text: workplace.workplaceName,
        value: workplace.id,
      }));
    const jobTitleOption = jobTitles.map((jobTitle, index) => ({
    key: index,
    text: jobTitle.title,
    value: jobTitle.id,
    }));
    return (
        <div>
        <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label>İşyeri Adı</label>
              <Dropdown
                  clearable item placeholder="İşyeri Adı" search selection
                  id="workplaceId"
                  value={formik.values.workplaceId}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "workplaceId")
                  }
                  
                  options={workplaceOption}
                  />
                  {formik.errors.workplaceId && formik.touched.workplaceId && (
                    <div className={"ui pointing red basic label"}>
                    {formik.errors.workplaceId}
                  </div>
                  )}
                </Form.Field>
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
                <label><h5>Başlangıç Tarihi</h5></label>
                <Form.Input
                  type="date"
                  id="dateOfEntry"
                  name="dateOfEntry"
                  value={formik.values.dateOfEntry}
                  onChange={formik.handleChange}
                />
                <label><h5>Ayrılma Tarihi</h5></label>
                <Form.Input
                  type="date"
                  id="dateOfQuit"
                  name="dateOfQuit"
                  value={formik.values.dateOfQuit}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "dateOfQuit")
                  }
                />
                
                  <Button
                    content="Güncelle"
                    positive
                    type="submit"
                    onClick={() => console.log(formik.errors)}
                  />
            </Form>
        </div>
    )
}


