import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import { Dropdown,Form , Button} from 'semantic-ui-react'
import LanguageService from "../../services/LanguageService";

const initialValues= {
    languageId: "",
    levelId:"",
}
  
export default function UpdateLanguage(props) {
    let languageService=new LanguageService();
    const [languages,setLanguages]=useState([]); 
    const [levels,setLevels]=useState([]);
    const formik = useFormik({
        initialValues,
        onSubmit: (values) => {
            let newLanguage = {
                language:{
                    id:values.languageId
                },
                languageLevel:{
                    id:values.levelId
                },
                candidate: {
                    id: 1,
                },
            };
            languageService.update( props.id,newLanguage  ).then((result) => console.log(newLanguage));
            alert("İlan eklendi onaylandıktan ");
        },
    });
    const handleChangeSemantic = (value, fieldName) => {
      formik.setFieldValue(fieldName, value);
    }
  useEffect(() => {
    languageService.getLanguages().then((result) => setLanguages(result.data.data));
    languageService.getLevels().then((result) => setLevels(result.data.data));
}, []);
    const languagesOption = languages.map((language, index) => ({
        key: index,
        text: language.languageName,
        value: language.id,
    }));
    const levelsOption = levels.map((level, index) => ({
        key: index,
        text: level.levelName,
        value: level.id,
    }));
    return (
        <div>
           <Form onSubmit={formik.handleSubmit}>
            <Form.Field>
              <label>Dil</label>
              <Dropdown clearable item placeholder="Dil Adı" search selection
                  id="languageId"
                  value={formik.values.languageId}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "languageId")
                  }
                  options={languagesOption}
                  />
                  {formik.errors.languageId && formik.touched.languageId && (
                   <div className={"ui pointing red basic label"}>
                    {formik.errors.languageId}
                   </div>
                  )}
            </Form.Field>
            <Form.Field>
              <label>Seviye</label>
              <Dropdown clearable item placeholder="Seviye Seçiniz" search selection
                  id="levelId"
                  value={formik.values.levelId}
                  onChange={(event, data) =>
                    handleChangeSemantic(data.value, "levelId")
                  }
                  options={levelsOption}
                  />
                  {formik.errors.levelId && formik.touched.levelId && (
                   <div className={"ui pointing red basic label"}>
                    {formik.errors.levelId}
                   </div>
                  )}
            </Form.Field>
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