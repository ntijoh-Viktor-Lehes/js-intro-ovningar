async function getForks(repo, user) {
  // make args repo obj
  let forks = await octokit.request(`GET /repos/${user}/${repo}/forks`);
  return forks.data;
}

async function getManifest(repo) {
  let manifest = repo;
  return manifest[13].contents_url;
}

async function getFilePath(userName, repoName) {
  // make args repo obj
  let resp = await octokit.request(
    `GET /repos/${userName}/${repoName}/contents/manifest.json`
  );
  // return JSON.parse(atob(resp.data.content)).body
  return JSON.parse(atob(resp.data.content)).filePath;
}

async function getCode(userName, repoName) {
  //let code = await octokit.request("GET /repos/ntijoh-frans-karlson/example/contents/lib/smallest_of_two.js")
  console.log(
    `GET /repos/${userName}/${repoName}/contents/${getFilePath(
      userName,
      repoName
    )}`
  );
  let code = await octokit.request(
    `GET /repos/${userName}/${repoName}/contents/${await getFilePath(
      userName,
      repoName
    )}`
  );

  return atob(code.data.content);
}
