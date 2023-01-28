import React, { useState, useEffect, forwardRef, useRef } from "react";
import { doc } from "firebase/firestore";
import { TextField } from "@mui/material";

import { Box, Button } from "@mui/material";

export const Profile = () => {
  const formRef = useRef();
  const [formError, setFormError] = useState({});
  const [formValue, setFormValue] = useState({
    email: "",
    role: "",
    uid: "",
    userName: "",
  });

  const handleSubmit = () => {};
  const getData = async () => {};
  useEffect(() => {});

  //returns the heading of the profile page box using Rsuite Form Validation to validate the input
  return (
    <div className="account-page-profile">
      <h4>Profile</h4>
      <Box
        component="form"
        ref={formRef}
        onChange={setFormValue}
        onCheck={setFormError}
        formValue={formValue}
      >
        <TextField
          controlId="profile-lookup"
          id="email-field"
          name="email"
          label="User Email :"
          value={formValue}
          canEdit
          onChange={setFormValue((e) => e.target.value)}
          required
        />

        <Button onClick={handleSubmit} type="submit">
          Save
        </Button>
      </Box>
    </div>
  );
};

//  const retrieveUser = () => {
//   user = localStorage.getItem("user");

//  if (!error && !loading && user) {
//    setUserName(user);
//  }
// };
//const LoadProfile = () => {
//  const user = sessionStorage.getItem("user");
//  const [value, snapshot, loading, error] = useDocumentDataOnce(
//    doc(db, "users", user.email)
//   );
/*  if (!user) {
    value = null;
    snapshot = null;
    loading = false;
    error = null;
  } else {
    const ref = doc(db, "users", user.uid).withConverter(userConverter);
    const [data, loading, error] = useCollectionData(ref);
  }
      return (
        <Fragment>
          <div>
            <TextFieldProfile
              id="uid-field"
              label="User ID:"
              value={user.uid}
              ref={formRef}
            />

            <TextFieldProfile
              id="role-field"
              label="Role :"
              value={user.role}
            />

            <TextFieldProfile
              id="admin-field"
              label="Admin ? :"
              value={user.email}
            />
          </div>
        </Fragment>
      );
    } */
export default Profile;
