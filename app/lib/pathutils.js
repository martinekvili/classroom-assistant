import path from "path"
import dateFormat from "dateformat"
import fs from "fs-extra"
import sanitize from "sanitize-filename"

export const getAssignmentFolder = (basePath, assignmentName) => {
  const time = dateFormat(new Date(), "mm-dd-yyyy-hh-MM-ss")
  return path.join(basePath, sanitize(`${assignmentName}-${time}`))
}

export const getClonePath = async (basePath, studentUsername) => {
  const submissionPath = path.join(basePath, sanitize(studentUsername))
  try {
    await fs.ensureDir(submissionPath)
    return submissionPath
  } catch (error) {
    return null
  }
}

export const getSanitizedStudentUserName = (studentUserName) => {
  return sanitize(studentUserName)
}

export const deleteGitFolder = async (repositoryPath) => {
  const gitFolderPath = path.join(repositoryPath, ".git")
  await fs.remove(gitFolderPath)
}

export const getAlreadyDownloadedSubmissions = async (basePath, assignmentName) => {
  const result = {}
  const assingmentFolderPrefix = sanitize(`${assignmentName}-`)

  for (const folder of await fs.readdir(basePath)) {
    if (!folder.startsWith(assingmentFolderPrefix)) {
      continue
    }

    const folderPath = path.join(basePath, folder)
    const stat = await fs.lstat(folderPath)
    if (!stat.isDirectory()) {
      continue
    }

    (await fs.readdir(folderPath)).forEach(submission => { result[submission] = path.join(folderPath, submission) })
  }

  return result
}
