import { component$ } from "@builder.io/qwik";
import { routeLoader$, useNavigate } from "@builder.io/qwik-city";
import { PrismaClient } from "@prisma/client";

export const useGetUsers = routeLoader$(async () => {
  const prisma = new PrismaClient();
  const rdv = await prisma.rdv.findMany();
  return rdv;
});

export default component$(() => {
  const rdvs = useGetUsers();
  const nav = useNavigate();

  return (
    <section>
      <div class="overflow-x-auto">
        <table class="table">
          {/* head */}
          <thead>
            <tr>
              <th>ID</th>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Phone 2</th>
              <th>Date of Birth</th>
              <th>Motif</th>
              <th>Already Patient</th>
              <th>Doctor</th>
              <th>CreatedAt</th>
            </tr>
          </thead>

          {/* body */}
          {rdvs.value.map((rdv) => (
            <tbody
              class="cursor-pointer"
              key={rdv.id}
              onClick$={async () => {
                await nav(`/rdv/${rdv.id}/`);
              }}
            >
              {/* row 1 */}
              <div>
                <tr class="hover">
                  <th>{`${rdv.id}`}</th>
                  <th>{`${rdv.lastName}`}</th>
                  <th>{`${rdv.firstName}`}</th>
                  <th>{`${rdv.email}`}</th>
                  <th>{`${rdv.phone}`}</th>
                  <th>{`${rdv.phone2}`}</th>
                  <th>{`${rdv.dateOfBirth}`}</th>
                  <th>{`${rdv.motif}`}</th>
                  <th>{`${rdv.alreadyPatient ? "yes" : "no"}`}</th>
                  <th>{`${rdv.doctor}`}</th>
                  <th>
                    {`${rdv.createdAt.getMonth()}/${rdv.createdAt.getDay()}/${rdv.createdAt.getFullYear()} ${rdv.createdAt.getHours()}:${rdv.createdAt.getMinutes()}:${rdv.createdAt.getSeconds()}`}
                  </th>
                </tr>
              </div>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
});
