import { useRef, useEffect } from "react";
import Swal from "sweetalert2";

const getFormDataAsJson = (formData: FormData) => {
  const object = {} as any;
  formData.forEach((value, key) => {
    // Reflect.has in favor of: object.hasOwnProperty(key)
    if (!Reflect.has(object, key)) {
      object[key] = value;
      return;
    }
    if (!Array.isArray(object[key])) {
      object[key] = [object[key]];
    }
    object[key].push(value);
  });
  return object;
};

export default function AboutPage() {
  const formRef = useRef<HTMLFormElement>(null);
  const formDataRef = useRef<FormData>();

  useEffect(() => {
    const formEl = formRef.current;
    const buttonSubmit = document.querySelector(
      'button[value="btnSubmit"]'
    ) as HTMLElement;

    if (!formEl || !buttonSubmit) return;

    formDataRef.current = new FormData(formEl);

    console.log("formDataRef.current", formDataRef.current);
  }, []);

  return (
    <div>
      <h1>About page</h1>

      <div style={{ margin: "0 auto", width: 450 }}>
        <form
          ref={formRef}
          style={{ display: "flex", flexDirection: "column", gap: 20 }}
          onSubmit={(e) => {
            e.preventDefault();

            if (!formRef.current) return;

            const formData = new FormData(formRef.current);
            if (!formData) return;

            const jsonData = getFormDataAsJson(formData);
            console.log("__jsonData", jsonData);

            Swal.fire({
              icon: "success",
              title: "Error!",
              text: jsonData.message || "Empty message",
              confirmButtonText: "Cool",
            });
          }}
        >
          <label htmlFor="message">Message</label>
          <input id="message" name="message" />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button type="submit" value="btnSubmit" style={{ width: 120 }}>
              submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
