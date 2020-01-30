declare var process: Process;

interface Process {
  env: Env
}

interface Env {
  GITHUB_TOKEN: string
  PEER: string
}

interface GlobalEnvironment{
  process: Process;
}
