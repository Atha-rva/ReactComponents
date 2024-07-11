import React from "react";
import { Usestyles } from "./Formcss";
import { ZValidInput } from "zitics-core-ui";
interface FormProps {
  id: number;
  onDelete: (id: number) => void;
}

const DynamicForm: React.FC<FormProps> = ({ id, onDelete }) => {
  const classes = Usestyles();
  return (
    <div className={classes.form} key={id}>
      <div>
        <ZValidInput
          type="text"
          id={`name-${id}`}
          name={`name-${id}`}
          // className="form-control"
          placeholder="Enter name"
          zlabel={"Name"}
          />
      </div>
      <div>

        <ZValidInput
          type="email"
          id={`email-${id}`}
          name={`email-${id}`}
          className="form-control"
          placeholder="Enter email" zlabel={"Email"}/>
      </div>
      <div>

        <ZValidInput
          type="tel"
          id={`phone-${id}`}
          name={`phone-${id}`}
          className="form-control"
          placeholder="Enter phone number" zlabel={"Phone"}        />
      </div>
      <div>

<ZValidInput
  type="tel"
  id={`phone-${id}`}
  name={`phone-${id}`}
  className="form-control"
  placeholder="Enter phone number" zlabel={"Phone"}        />
</div>
<div>

<ZValidInput
  type="tel"
  id={`phone-${id}`}
  name={`phone-${id}`}
  className="form-control"
  placeholder="Enter phone number" zlabel={"Phone"}        />
</div>
<div>

<ZValidInput
  type="tel"
  id={`phone-${id}`}
  name={`phone-${id}`}
  className="form-control"
  placeholder="Enter phone number" zlabel={"Phone"}        />
</div>
      <div style={{display:"flex" , flexDirection:"column"}}>
      </div>
      <button onClick={() => onDelete(id)} className="btn btn-danger">
        Delete
      </button>
      </div>
  );
};

export default DynamicForm;
