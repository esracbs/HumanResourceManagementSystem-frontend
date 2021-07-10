 import React, { useEffect, useState } from "react";
 import { useFormik } from "formik";
 import { Dropdown,Form ,TextArea,  Button} from 'semantic-ui-react'
import SocialMediaService from "../../services/SocialMediaService";

 const initialValues= {
     link: "",
     linkTypeId: "",
}
   
 export default function UpdateSocialMedia(props) {
     let socialMediaService=new SocialMediaService();
     const [socialMedias,setSocialMedias]=useState([]);
     const [linkTypes,setLinkTypes]=useState([]);   
     const formik = useFormik({
         initialValues,
         onSubmit: (values) => {
             let newSocialMedia = {
                 linkType:{
                     id:values.linkTypeId
                 },
                 link: values.link,
                 candidate: {
                     id: 2,
                 },
             };
             socialMediaService.update(props.id, newSocialMedia).then((result) => console.log(newSocialMedia));
             alert("İlan eklendi onaylandıktan sonra ");
         },
     });
     const handleChangeSemantic = (value, fieldName) => {
       formik.setFieldValue(fieldName, value);
     }
   useEffect(() => {
    let socialMediaService=new SocialMediaService();
    socialMediaService.getSocialMedias().then((result) => setSocialMedias(result.data.data));
    socialMediaService.getLinkTypes().then((result) => setLinkTypes(result.data.data));
 }, []);
     const linkTypesOption = linkTypes.map((linkType, index) => ({
         key: index,
         text: linkType.linkType,
         value: linkType.id,
     }));
     return (
         <div>
            <Form onSubmit={formik.handleSubmit}>
             <Form.Field>
               <label>Link Tipi</label>
               <Dropdown clearable item placeholder="Link Tipi" search selection
                   id="linkTypeId"
                   value={formik.values.linkTypeId}
                   onChange={(event, data) =>
                     handleChangeSemantic(data.value, "linkTypeId")
                   }
                   options={linkTypesOption}
                   />
                   {formik.errors.linkTypeId && formik.touched.linkTypeId && (
                    <div className={"ui pointing red basic label"}>
                     {formik.errors.linkTypeId}
                    </div>
                   )}
                 </Form.Field>
            <Form.Field>
                  <label>Açıklama</label>
                    <TextArea
                      placeholder="Link URL"
                      value={formik.values.link}
                      name="link"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {formik.errors.link && formik.touched.link && (
                      <div className={"ui pointing red basic label"}>
                        {formik.errors.link}
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

