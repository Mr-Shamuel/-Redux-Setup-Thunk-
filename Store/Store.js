import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { userReducer } from "../Reducers/User/UserReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { addReducerFirstSection } from "../Reducers/AdminStructure/AddReducer";
import {
  findLayerReducer,
  getLayerReducer,
} from "../Reducers/Configuration/LayerReducer";
import { getHierarchyReducer } from "../Reducers/Configuration/HierarchyReducer";
import { DashboardIndicatorReducer } from "../Reducers/DashboardIndicator/DashboardIndicatorReducer";
import { getDesignationReducer } from "../Reducers/Configuration/DesignationReducer";
import { getNoticeReducer } from "../Reducers/Configuration/NoticeTypeReducer";
import { getApaStructureReducer } from "../Reducers/Apamanagement/ApaStructureReducer";
import { getSectionReducer } from "../Reducers/Apamanagement/SectionReducer";
import { getOverallPerformancesAllReducer } from "../Reducers/Apamanagement/OverallPerformancesAllReducer";
import { getOverallPerformancessubtitleAllReducer } from "../Reducers/Apamanagement/OverallPerformancessubtitleAllReducer";
import { getWorkplanMasterDataAllReducer } from "../Reducers/Apamanagement/WorkplanMasterDataAllReducer";
import { getWorkplanTableColumnsAllReducer } from "../Reducers/Apamanagement/WorkplanTableColumnsAllReducer";
import { getFormInputsAllReducer } from "../Reducers/FormInputs/FormInputsAllReducer";
import { getAllReducer } from "../Reducers/MasterData/GetAllReducer";
import { getGeneralTableColumnsAllReducer } from "../Reducers/Apamanagement/GeneralTableColumnsAllReducer";
import { getLinkTableColumnsAllReducer } from "../Reducers/Apamanagement/LinkTableColumnsAllReducer";
import { getOverAllPerformanceReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/OverAllPerformance/OverAllPerformanceReducer";
import { getOverAllSubtitleReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/OverAllPerformance/OverAllPerformanceSubtitleReducer";
import { getOverAllSubtitleInputReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/OverAllPerformance/OverAllPerformanceSubtitleInputReducer";
import { getPreambleReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/Preamble/PreambleReducer";
import { getPreambleAllByFilterInputsReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/Preamble/PreambleInputAllReducer";
import { getPreambleAllReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/Preamble/PreambleAllReducer";
import { getStructureDropdownReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/StructureDropdownData/StructureDropdownDataReducer";
import {
  getGeneralTextBoxSubtitles,
  getGeneralTextBoxSubtitlesReducer,
} from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTextBox/GeneralTextBoxReducer";
import { getGeneralTextBoxSubtitlesInputsAllReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTextBox/GeneralTextBoxSubtitleAllReducer";

import { getStructurepreviewbyIdReducer } from "../Reducers/Apamanagement/StructurePreview/StructurepreviewbyIdReducer";
import { getALLApaStructureReducer } from "../Reducers/Apamanagement/AllApaStructureReducer";
import { UserInputGetAllColumnsReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/WorkPlanTable/UserInputGetAllColumnsReducer";
import { getUserInputActivityAllReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/WorkPlanTable/UserInputGetActivityInputAllReducer";
import { getUserInputIndicatorInputAllReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/WorkPlanTable/UserInputGetIndicatorInputAllReducer";
import { getActivityCategoriesReducer } from "../Reducers/Apamanagement/Categories/ActivityCategories/ActivityCategoriesReducer";
import { getActivityCategoriesDeviderALLReducer } from "../Reducers/Apamanagement/Categories/ActivityCategoriesDeviderAll/ActivityCategoriesDeviderAllReducer";
import { getUserInputPreviewWorkPlanTableReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/WorkPlanTable/UserInputPreviewWorkPlanTableReducer";
import { getDeviderDetailsReducer } from "../Reducers/Apamanagement/Categories/ActivityCategoriesDeviderAll/DeviderDetailsReducer";
import { getOverAllPerformancePreviewReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/OverAllPerformance/OverAllPerformancePreviewReducer";
import { getUserInputPreviewLinkTableReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/LinkTable/UserInputPreviewLinkTableReducer";
import { getUserInputPreviewGeneralTableReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTable/UserInputPreviewGeneralTableReducer";
import { getUserInputPreviewSignatureReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/Signature/UserInputPreviewSignatureReducer";
import { getUserInputPreviewGeneralSecReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTextBox/UserInputPreviewGeneralSecReducer";
import { getActivityCategorieLinkReducer } from "../Reducers/Apamanagement/Categories/ActivityCategoriesRelatedLink/ActivityCategoriesRelatedLinkReducer";
import { getUserInputPreviewPreambleReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/Preamble/UserInputPreviewPeambleReducer";
import { getOfficeReducer } from "../Reducers/SubordinateOffice/Office/OfficeReducer";
import { getRoleReducer } from "../Reducers/Configuration/RoleReducer";
import { getUserReducer } from "../Reducers/SubordinateOffice/User/UserReducer";
import { getToolkitReducer } from "../Reducers/Configuration/ToolkitReducer";
import { getFiscalYearReducer } from "../Reducers/Apamanagement/FiscalYear/FiscalYearReducer";
import { getMandatoryWeightReducer } from "../Reducers/Apamanagement/MandatoryWeight/MandatoryWeightReducer";
import { getGeneralTableOthersInfoReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTable/GeneralTableOtherInfoReducer";
import { getGeneralTableSecondColReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTable/GeneralTableSecondColReducer";
import { getAPAGuideLineReducer } from "../Reducers/Apamanagement/APAGuideLine/APAGuideLineReducer";
import { getGeneralTableFirstColReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/GeneralTable/GeneralTableFirstColReducer";
import { getNoticeAddReducer } from "../Reducers/Notice/Notice/NoticeAddReducer";
import { getAcronymsReducer } from "../Reducers/Configuration/AcronymsReducer";
import { getNoticeWithOutAuthReducer } from "../Reducers/Notice/Notice/NoticeWithOutAuthReducer";
import { getNoticeWithOutAuthByTypeIdReducer } from "../Reducers/Notice/Notice/NoticeWithOutAuthByTypeIdReducer";
import { getNoticeTypeWithOutAuthReducer } from "../Reducers/Configuration/NoticeTypeWithOutAuthReducer";
import { getFAQReducer } from "../Reducers/Configuration/FAQReducer";
import { getFAQLandingReducer } from "../Reducers/Configuration/FAQLandingReducer";
import { getPublicationReducer } from "../Reducers/Publication/PublicationReducer";
import { getPublicationLandingReducer } from "../Reducers/Publication/PublicationLandingReducer";
import { getAPARelatedTraningReducer } from "../Reducers/APARelatedTraning/APARelatedTraningReducer";
import { getAPAExpertPoolReducer } from "../Reducers/APAExpertPool/APAExpertPoolReducer";
import { getAPADeterminationTimeSubmissionReducer } from "../Reducers/APADeterminationTimeSubmission/APADeterminationTimeSubmissionReducer";
import { getAPAVersionReducer } from "../Reducers/APADeterminationTimeSubmission/APAVersionReducer";
import { getUserInputPreviewAcronymTableReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/AcronymTable/AcronymUserInputReducer";
import { getMandatoryDataReducer } from "../Reducers/Apamanagement/MandatoryWeight/MandatoryDataReducer";
import { getAPACalenderReducer } from "../Reducers/APACalender/APACalenderReducer";
import { getAPACalenderTableReducer } from "../Reducers/APACalender/APACalenderTableReducer";
import { getApaAssignDataReducer } from "../Reducers/Apamanagement/ApaAssignByCabinetReducer";
import { getCheckerSubmissionDataReducer } from "../Reducers/Apamanagement/CheckerSubmission/CheckerSubmissionReducer";
import { getMakerSubmissionDataReducer } from "../Reducers/Apamanagement/MakerSubmission/MakerSubmissionReducer";
import { getApaAchievementSubmissionTypeReducer } from "../Reducers/ApaAchievement/ApaAchievementSubmissionTypeReducer";
import { getApaAchievementReducer } from "../Reducers/ApaAchievement/ApaAchievementReducer";
import { getShowCommentsDataReducer } from "../Reducers/Apamanagement/MakerSubmission/ShowCommentsReducer";
import { getApaRollBackListDataReducer } from "../Reducers/Apamanagement/MakerSubmission/ApaRollBackListReducer";
import { GetFymwALLReducer } from "../Reducers/Global/GetFyMwReducer";
import { SdgTableReducer } from "../Reducers/Apamanagement/ApaPreparationByUser/SDGTable/SDGTableReducer";
import { getAllSubMenuReducer } from "../OthersCompo/Menus/SubMenu/SubMenuReducer";
import { getAllSubSubMenuReducer } from "../OthersCompo/Menus/SubSubMenu/SubSubMenuReducer";
import { getAllMenuReducer } from "../OthersCompo/Menus/MainMenu/MenuReducer";
import { getMessageOutboxReducer } from "../Reducers/Message/Notice/MessageOutboxReducer";
import { getWithOutAuthHierarchyReducer } from "../Reducers/WithOutAuthHierarchy/WithOutAuthHierarchyReducer";
import { getAllProfileReducer } from "../OthersCompo/ConfigurableProfile/ConfigurableProfileReducer";
import { getIndicatorReceiverOrgReducer } from "../OthersCompo/IndicatorReceiverOrgLists/IndicatorReceiverOrgListsReducer";
import { ContentManagementReducer } from "../OthersCompo/ContentManagement/ContentManagementReducer";
import { DashboardAnalyticsReducer } from "../OthersCompo/DashBoardAnalytics/DashBoardAnalyticsReducer";
import { DashboardAnalyticsListReducer } from "../OthersCompo/DashBoardAnalyticsList/DashBoardAnalyticsListReducer";
import { ApaCorrectionTimeSettingReducer } from "../OthersCompo/ApaCorrectionTimeSetting/ApaCorrectionTimeSettingReducer";
import { NotificationsDataReducer } from "../OthersCompo/NotificationData/NotificationsDataReducer";
import { NISInfoReducer } from "../OthersCompo/Nis/NisReducer";
import { UserDetailsReducer } from "../OthersCompo/UserDetails/UserDetailsReducer";
import { sameLowerHierarchyReducer } from "../OthersCompo/SameLowerHierarchy/SameLowerHierarchyReducer";
import { hashTagReducer } from "../OthersCompo/HashTag/HashTagReducer";
import { gradesReducer } from "../OthersCompo/Grades/GradesReducer";


const RootReducer = combineReducers({
  user: userReducer,
  firstSection: addReducerFirstSection,
  layers: getLayerReducer,
  hierarchy: getHierarchyReducer,
  // layer: findLayerReducer,
  designation: getDesignationReducer,
  noticeType: getNoticeReducer,
  roleData: getRoleReducer,
  toolkitData: getToolkitReducer,
  globalNavigator: DashboardIndicatorReducer,

  //structure
  apaStructureData: getApaStructureReducer,
  sectionData: getSectionReducer,
  overallperformanceallData: getOverallPerformancesAllReducer,
  overallperformancesubtitleallData: getOverallPerformancessubtitleAllReducer,
  workplanMasterData: getWorkplanMasterDataAllReducer,
  workplanTableColumnsAllData: getWorkplanTableColumnsAllReducer,
  formInputsAlldata: getFormInputsAllReducer,
  allmasterdata: getAllReducer,
  generalTableColumnsAllData: getGeneralTableColumnsAllReducer,
  linkTableColumnsAllData: getLinkTableColumnsAllReducer,
  generalTableFirstCol: getGeneralTableFirstColReducer,
  generalTableSecondCol: getGeneralTableSecondColReducer,
  generalTableOthersInfo: getGeneralTableOthersInfoReducer,

  // apa preparation
  UserInputGetAllColumnsdata: UserInputGetAllColumnsReducer,
  UserInputActivityAlldata: getUserInputActivityAllReducer,
  UserInputGetIndicatorAlldata: getUserInputIndicatorInputAllReducer,
  UserInputWorkPlanTableData: getUserInputPreviewWorkPlanTableReducer,
  overallperformacepreviewData: getOverAllPerformancePreviewReducer,
  UserInputLinkTableData: getUserInputPreviewLinkTableReducer,
  UserInputGeneralTableData: getUserInputPreviewGeneralTableReducer,
  UserInputSignatureData: getUserInputPreviewSignatureReducer,
  UserInputGeneralSecData: getUserInputPreviewGeneralSecReducer,
  UserInputPreviewPreamble: getUserInputPreviewPreambleReducer,

  //structure preview
  structurepreviewbyidData: getStructurepreviewbyIdReducer,

  //all structure
  allStructure: getALLApaStructureReducer,
  // over all performance
  overAllperformance: getOverAllPerformanceReducer,
  OverAllSubtitle: getOverAllSubtitleReducer,
  OverAllSubtitleInput: getOverAllSubtitleInputReducer,

  // preamble
  preambleData: getPreambleReducer,
  // preambleAll: getPreambleAllReducer,
  preambleFilterInputAll: getPreambleAllByFilterInputsReducer,

  //structureDropdown
  DropdownData: getStructureDropdownReducer,
  //general textbox subtitle
  SubtitlesAll: getGeneralTextBoxSubtitlesReducer,
  SubtitlesInputsAll: getGeneralTextBoxSubtitlesInputsAllReducer,

  activityCategoriesData: getActivityCategoriesReducer,
  activityCategoriesDeviderALLData: getActivityCategoriesDeviderALLReducer,
  deviderDetailsData: getDeviderDetailsReducer,
  activityCategoryLinkData: getActivityCategorieLinkReducer,
  fiscalYear: getFiscalYearReducer,
  mandatoryData: getMandatoryDataReducer,
  mandatoryWeight: getMandatoryWeightReducer,
  apaGuideLine: getAPAGuideLineReducer,

  //SubordinateOffice
  userData: getUserReducer,
  officeData: getOfficeReducer,

  //Notice
  notice: getNoticeAddReducer,
  noticeWithOutAuth: getNoticeWithOutAuthReducer,
  noticeWithOutAuthByTypeId: getNoticeWithOutAuthByTypeIdReducer,
  noticeTypeWithOutAuth: getNoticeTypeWithOutAuthReducer,

  //Configuration
  acronyms: getAcronymsReducer,
  faq: getFAQReducer,
  faqLanding: getFAQLandingReducer,
  publication: getPublicationReducer,
  publicationLanding: getPublicationLandingReducer,
  hashTagData: hashTagReducer,
  gradesData: gradesReducer,

  // APA Related Traning
  apaRelatedTraning: getAPARelatedTraningReducer,
  apaExpertPool: getAPAExpertPoolReducer,

  // apaDeterminationTimeSubmission
  apaDeterminationTimeSubmission: getAPADeterminationTimeSubmissionReducer,
  apaVersion: getAPAVersionReducer,
  userinputAcronymltable: getUserInputPreviewAcronymTableReducer,

  //apaCalender
  apaCalender: getAPACalenderReducer,
  apaCalenderTable: getAPACalenderTableReducer,

  // apa submission
  apaAssignData: getApaAssignDataReducer,
  makerSubmissionData: getMakerSubmissionDataReducer,
  checkerSubmissionData: getCheckerSubmissionDataReducer,

  // apaAchievement
  apaAchievementSubmissionType: getApaAchievementSubmissionTypeReducer,
  apaAchievement: getApaAchievementReducer,
  showCommentsData: getShowCommentsDataReducer,
  apaRollBackListData: getApaRollBackListDataReducer,

  fymwData: GetFymwALLReducer,
  sdgTableData: SdgTableReducer,

  //menu
  menuData: getAllMenuReducer,
  subMenuData: getAllSubMenuReducer,
  subSubMenuData: getAllSubSubMenuReducer,
  messageOutbox: getMessageOutboxReducer,

  WithOutAuthHierarchyAll: getWithOutAuthHierarchyReducer,
  profileData: getAllProfileReducer,
  indicatorReceiverOrgList: getIndicatorReceiverOrgReducer,

  //content management
  contentData: ContentManagementReducer,
  DashboardAnalyticsData: DashboardAnalyticsReducer,
  DashboardAnalyticsList: DashboardAnalyticsListReducer,
  correctionStatusData: ApaCorrectionTimeSettingReducer,


  NotificationsData: NotificationsDataReducer,
  NisData: NISInfoReducer,
  userDetailsData: UserDetailsReducer,//user details
  sameLowerHierarchyData: sameLowerHierarchyReducer



})




let user;
let initialState = {
  user: user,
};

const middleware = [thunk];

const store = createStore(
  RootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
