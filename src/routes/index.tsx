
import { component$ } from "@builder.io/qwik";
import {
  Form,
  type DocumentHead,
  routeAction$,
  zod$,
  z,
} from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const useSendRDV = routeAction$(
  async (data) => {
    console.log(data);
    const prisma = new PrismaClient();
    const rdv = await prisma.rdv.create({
      data,
    });
    return rdv;
    
  }
  ,
  zod$({
    firstName: z.string(),
    lastName: z.string(),
    email: z.string().email(),
    phone: z.string(),
    phone2: z.string(),
    dateOfBirth: z.string(),
    motif: z.string(),
    alreadyPatient: z.preprocess((value) => value === 'on', z.boolean()),
    doctor: z.string(),
  })
);
export default component$(() => {
  const sendRDVAction = useSendRDV();
  return (
    <>
      <Form
        class="flex justify-center items-center h-screen"
        action={sendRDVAction}
      >
        <div class="form-control w-full max-w-sm mt-16">
          <div id="firstName">
            <label for="firstName" class="label">
              <span class="label-text">First name</span>
            </label>
            <input
              type="text"
              placeholder="First Name"
              class="input input-bordered input-sm w-full max-w-sm"
              name="firstName"
            />
          </div>
          <div id="lastName">
            <label for="lastName" class="label">
              <span class="label-text">Last name</span>
            </label>
            <input
              type="text"
              placeholder="Last name"
              class="input input-bordered input-sm w-full max-w-sm"
              name="lastName"
            />
          </div>
          <div id="email">
            <label for="email" class="label">
              <span class="label-text">email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              class="input input-bordered input-sm w-full max-w-sm"
              name="email"
            />
          </div>

          <div id="phone">
            <label for="phone" class="label">
              <span class="label-text">Phone number</span>
            </label>
            <input
              type="tel"
              placeholder="Phone number"
              class="input input-bordered input-sm w-full max-w-sm"
              name="phone"
            />
          </div>
          <div id="phone2">
            <label for="phone2" class="label">
              <span class="label-text">another phone number</span>
            </label>
            <input
              type="tel"
              placeholder="another phone number"
              class="input input-bordered input-sm w-full max-w-sm"
              name="phone2"
            />
          </div>

          <div id="dateOfBirth">
            <label for="dateOfBirth" class="label">
              <span class="label-text">Date of birth</span>
            </label>
            <input
              type="date"
              placeholder="Date of birth"
              class="input input-bordered input-sm w-full max-w-sm"
              name="dateOfBirth"
            />
          </div>

          <div id="motif">
            <label for="motif" class="label">
              <span class="label-text">What is the reason for your visit?</span>
            </label>
            <select
              class="select select-bordered select-sm w-full max-w-sm"
              name="motif"
            >
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <div id="alreadyPatient">
            <label for="alreadyPatient" class="label">
              <span class="label-text">Passed already?</span>
            </label>
            <input
              type="checkbox"
              class="checkbox checkbox-sm"
              name="alreadyPatient"
            />
          </div>

          <div class="doctor">
            <label for="doctor" class="label">
              <span class="label-text">Who is your doctor?</span>
            </label>
            <input
              type="text"
              placeholder="doctor name"
              class="input input-bordered input-sm w-full max-w-sm"
              name="doctor"
            />
          </div>

          <div id="submit" class="w-full mt-4 max-w-sm mb-6">
            <button
              type="submit"
              class="btn btn-primary btn-sm max-w-sm w-full"
            >
              Submit
            </button>
          </div>
        </div>
      </Form>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
