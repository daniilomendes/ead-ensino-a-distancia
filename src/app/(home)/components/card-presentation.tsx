import SectionTitle from "../../../components/ui/section-title";

const CardPresentation = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <SectionTitle className="">O QUE VOCÊ VAI ACESSAR</SectionTitle>

      <div className="container mx-auto p-5 ">
        <div className="bg-frontend-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">FRONT-END</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>

        <div className="bg-backend-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">BACK-END</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>
        <div className="bg-mobile-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">MOBILE-END</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>

        <div className=" bg-git-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">GIT e GITHUB</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>

        <div className="bg-projects-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">PROJETOS</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>

        <div className=" bg-career-background relative h-[280px] w-[340px] rounded-lg bg-cover shadow-md mb-5">
          <div className=" flex flex-col items-center justify-center  p-5">
            <p className=" mb-2 font-bold">CARREIRA</p>
            <p>
              O EAD Ensino é o lugar para você evoluir. Para isso, você vai ter
              acesso às práticas avançadas de programação, atualizações de
              tecnologias e todo o suporte técnico necessário para ser um sênior
              na programação.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPresentation;
