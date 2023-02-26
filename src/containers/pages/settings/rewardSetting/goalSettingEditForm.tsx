import React, { useEffect } from "react";
import {
  Term,
  Service,
  ServiceValue,
  GoalFormValue,
} from "../../../../repositories/api";
import {
  Input,
  Select,
  Option,
  Button,
  Switch,
} from "@material-tailwind/react";

interface Props {
  formValues: GoalFormValue;
  terms: Term[];
  services: Service[];
  serviceValues: ServiceValue[];
  inputOnChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
  selectOnChangeHandler: (value: string, name: string) => void;
  checkedOnChangeHandler: (value: boolean, name: string) => void;
  submitHandler: () => void;
}

export const GoalSettingEditForm: React.FC<Props> = ({
  formValues,
  terms,
  services,
  serviceValues,
  inputOnChangeHandler,
  selectOnChangeHandler,
  checkedOnChangeHandler,
  submitHandler,
}) => {
  const [serviceId, setServiceId] = React.useState<string>(
    serviceValues
      .filter(
        (serviceValue) =>
          serviceValue.service_id === formValues.service_value_id
      )[0]
      ?.service_id.toString()
  );
  const [filterServiceValues, setFilterServiceValues] = React.useState<
    ServiceValue[]
  >([]);

  useEffect(() => {
    setFilterServiceValues(
      serviceValues.filter(
        (serviceValue) => serviceValue.service_id === Number(serviceId)
      )
    );
  }, [serviceId, serviceValues]);

  return (
    <div className="p-4 pt-12">
      <div className="mb-12">
        <Input
          variant="static"
          label="Name"
          name="name"
          color="red"
          value={formValues.name}
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="mb-12">
        <Select
          variant="static"
          label="Target"
          className="mb-12"
          color="red"
          value={serviceId}
          onChange={(value) => {
            selectOnChangeHandler(value || "", "service_id");
            setServiceId(value || "");
          }}
        >
          {services.map((service) => (
            <Option key={service.service_id} value={`${service.service_id}`}>
              {service.name}
            </Option>
          ))}
        </Select>
        {filterServiceValues.length > 0 && (
          <div className="mt-2">
            <Select
              variant="static"
              className="mb-12"
              color="red"
              value={`${formValues.service_value_id}`}
              onChange={(value) => {
                selectOnChangeHandler(value || "", "service_value_id");
              }}
            >
              {filterServiceValues.map((serviceValue) => (
                <Option
                  key={serviceValue.service_value_id}
                  value={`${serviceValue.service_value_id}`}
                >
                  {serviceValue.name}
                </Option>
              ))}
            </Select>
          </div>
        )}
      </div>
      <div className="mb-12">
        <Input
          variant="static"
          label="Target value"
          name="value"
          color="red"
          value={formValues.value}
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="mb-12">
        <Select
          variant="static"
          label="Term"
          className="mb-12"
          color="red"
          value={`${formValues.term_id}`}
          onChange={(value) => {
            selectOnChangeHandler(value || "", "term_id");
          }}
        >
          {terms.map((term) => (
            <Option key={term.term_id} value={`${term.term_id}`}>
              {term.name}
            </Option>
          ))}
        </Select>
      </div>
      <div className="mb-12">
        <Input
          variant="static"
          label="Points earned upon achievement"
          name="point"
          color="red"
          value={formValues.point}
          onChange={inputOnChangeHandler}
        />
      </div>
      <div className="mb-12">
        <Switch
          id="red"
          color="red"
          label="Status"
          checked={formValues.is_active}
          onChange={(e) => {
            checkedOnChangeHandler(e.target.checked, "is_active");
          }}
        />
      </div>
      <div className="mb-12">
        <Button color="red" fullWidth onClick={submitHandler}>
          Save
        </Button>
      </div>
    </div>
  );
};
