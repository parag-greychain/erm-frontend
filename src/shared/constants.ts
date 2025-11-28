export enum PATHS {
  home = "/",
  chat = "/chat",
  login = "/login",
  knowledgeSources = "/knowledge-sources",
  agents = "/agents",
  projects = "/projects",
  projectDetails = "/project-details",
}

export enum LocalStorageName {
  User = "user_ERM",
  Token = "token_ERM",
}

export enum Month {
  Jan = 1,
  Feb = 2,
  Mar = 3,
  Apr = 4,
  May = 5,
  Jun = 6,
  Jul = 7,
  Aug = 8,
  Sep = 9,
  Oct = 10,
  Nov = 11,
  Dec = 12,
}

export enum Layout {
  Admin = "ADMIN",
  User = "USER",
}

export const Images = ["png", "jpg", "jpeg", "svg"];
export const RunVisionFileType = ["txt", "pdf", "doc", "docx", "ppt", "pptx"];
export const SurveyFileType = ["xls", "xlsx"];

export enum SummaryStaus {
  NOT_STARTED = "NOT_STARTED",
  PROCESSING = "PROCESSING",
  FAILED = "FAILED",
  COMPLETED = "COMPLETED",
  NULL = "NULL",
  CANCELLED = "CANCELLED",
  TO_BE_PROCESSED = "TO_BE_PROCESSED",
}
export const fileType = [
  { title: ".docx", key: "docx" },
  { title: ".doc", key: "doc" },
  { title: ".xls", key: "xls" },
  { title: ".xlsx", key: "xlsx" },
  { title: ".pdf", key: "pdf" },
  { title: ".ppt", key: "ppt" },
  { title: ".png", key: "png" },
  { title: ".jpg", key: "jpg" },
  { title: ".mp4", key: "mp4" },
  { title: ".mov", key: "mov" },
  { title: ".avi", key: "avi" },
  { title: ".mkv", key: "mkv" },
  { title: ".wmw", key: "wmw" },
  { title: ".webm", key: "webm" },
  { title: ".3gp", key: "3gp" },
  { title: ".mpeg", key: "mpeg" },
  { title: ".mpg", key: "mpg" },
  { title: ".mp3", key: "mp3" },
  { title: ".aac", key: "aac" },
  { title: ".wav", key: "wav" },
];
