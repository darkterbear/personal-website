import BasicUbuntuServerSecurity from "./basic_ubuntu_server_security";
import BuildingADrone from "./building_a_drone";
import BuildingMahjong from "./building_mahjong";
import UbuntuServerSetupWithDO from "./ubuntu_server_setup_with_do";
import MyFutureforceInternshipExperience from "./my_futureforce_internship_experience";

export const ARTICLES = [
  BuildingMahjong,
  BuildingADrone,
  MyFutureforceInternshipExperience,
  BasicUbuntuServerSecurity,
  UbuntuServerSetupWithDO,
];

// Validate keys are unique
if (new Set(ARTICLES.map((a) => a.key)).size !== ARTICLES.length) {
  throw Error("Articles must have unique keys");
}

export const getArticleByKey = (key) => {
  return ARTICLES.find((a) => a.key === key);
};
