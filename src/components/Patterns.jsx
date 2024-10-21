import LoginPageCardComp from "./LoginStaticCard";

const Pattern = () => {
  const cardsArray = [
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EBDF7",
      gradient2: "#654A91",
      textColor: "#ffffff",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#F77E7E",
      gradient2: "#914A4A",
      textColor: "#ffffff",
      title: "Searching Inspirations For Upcoming Projects",
      activeBulletsNum: 7,
      attentionText: "Attention: They Like Our Old Project",
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#CCF4D0",
      gradient2: "#CFE9D5",
      textColor: "#11AD17",
      title: "Searching Inspirations For Upcoming Projects",
      activeBulletsNum: 7,
      attentionText: "Attention: They Like Our Old Project",
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EBDF7",
      gradient2: "#947BBE",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#90DDA1",
      gradient2: "#000000",
      textColor: "#11AD17",
      title: "",
      activeBulletsNum: 0,
      attentionText: "Attention: They Like Our Old Project",
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#F77E7E",
      gradient2: "#914A4A",
      textColor: "#FFFFFF",
      title: "Searching Inspirations For Upcoming Projects",
      activeBulletsNum: 7,
      attentionText: "Attention: They Like Our Old Project",
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#CCF4D0",
      gradient2: "#CFE9D5",
      textColor: "#FFFFFF",
      title: "Searching Inspirations For Upcoming Projects",
      activeBulletsNum: 7,
      attentionText: "Attention: They Like Our Old Project",
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EBDF7",
      gradient2: "#654A91",
      textColor: "#ffffff",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#11AD17",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#F4E4CC",
      gradient2: "#F4E4CC",
      textColor: "#11AD17",
      title: "Searching Inspirations For Upcoming Projects",
      activeBulletsNum: 7,
      attentionText: "Attention: They Like Our Old Project",
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EE2F7",
      gradient2: "#4A6F91",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#11AD17",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#114FAD",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#11AD17",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EE2F7",
      gradient2: "#4A6F91",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },
    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#11AD17",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#F6F28C",
      gradient2: "#F6F28C",
      textColor: "#F9D100",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF792",
      gradient2: "#11AD17",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },

    {
      tags: ["#Website", "#Clients"],
      gradient1: "#7EF7F0",
      gradient2: "#7EF7F0",
      textColor: "#FFFFFF",
      title: "Make Mobile App Design",
      activeBulletsNum: 12,
      attentionText: "Attention: They Like Our Old Project",
      toDo: [
        "Create User Flow",
        "Make Design Sistem",
        "Deside Color",
        "Make main Logo",
      ],
    },
  ];

  return (
    <div className="hidden xl:block gap-x-[5px] gap-y-[10px] columns-3 overflow-hidden xl:min-w-[496px] justify-self-start">
      {cardsArray.map((item, index) => {
        return (
          <LoginPageCardComp
            key={index}
            tags={item.tags}
            gradient1={item.gradient1}
            gradient2={item.gradient2}
            textColor={item.textColor}
            title={item.title}
            activeBulletsNum={item.activeBulletsNum}
            attentionText={item.attentionText}
            toDo={item.toDo}
          />
        );
      })}
    </div>
  );
};

export default Pattern;
