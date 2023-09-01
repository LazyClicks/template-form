import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const useGetUser = routeLoader$(async ({ params, status }) => {
  const rdvID = parseInt(params["rdvID"], 10);
  const prisma = new PrismaClient();
  const rdv = await prisma.rdv.findUnique({ where: { id: rdvID } });
  if (!rdv) {
    // Set the status to 404 if the user is not found
    status(404);
  }
  return rdv;
});

export default component$(() => {
  const rdv = useGetUser();
  return (
    <section class="flex flex-col justify-center items-center h-screen">
      <div class="card w-96 bg-base-100 shadow-xl card-bordered">
        <div class="card-body">
          <h2 class="card-title">RDV</h2>

          {rdv.value ? (
            <>
              <p>{`First Name: ${rdv.value.firstName}`}</p>
              <p>{`Last Name: ${rdv.value.lastName}`}</p>
              <p>{`Email: ${rdv.value.email}`}</p>
              <p>{`Phone: ${rdv.value.phone}`}</p>
              <p>{`Phone 2: ${rdv.value.phone2}`}</p>
              <p>{`Date of Birth: ${rdv.value.dateOfBirth}`}</p>
              <p>{`Motif: ${rdv.value.motif}`}</p>
              <p>{`Already Patient: ${rdv.value.alreadyPatient}`}</p>
              <p>{`Doctor: ${rdv.value.doctor}`}</p>
              <p>
                {` CreatedAt: ${rdv.value.createdAt.getDay()}/
            ${rdv.value.createdAt.getMonth()}/${rdv.value.createdAt.getFullYear()}
            ${rdv.value.createdAt.getHours()}:${rdv.value.createdAt.getMinutes()}:
            ${rdv.value.createdAt.getSeconds()}`}
              </p>
            </>
          ) : (
            <p>User not found</p>
          )}
        </div>
      </div>
    </section>
  );
});
