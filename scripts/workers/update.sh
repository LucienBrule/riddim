#!/usr/bin/env bash
set -euo pipefail

usage() {
  echo "Usage: $0 <workspace-name>" >&2
  exit 1
}

if [[ "${1:-}" == "" ]]; then
  usage
fi

workspace_name="$1"
repo_root="$(git rev-parse --show-toplevel)"
workspace_dir="$repo_root/.workers/$workspace_name"

if [[ ! -d "$workspace_dir/.git" ]]; then
  echo "Workspace not found: $workspace_dir" >&2
  exit 1
fi

git -C "$workspace_dir" fetch --prune

current_branch="$(git -C "$workspace_dir" rev-parse --abbrev-ref HEAD)"
if [[ "$current_branch" != "HEAD" ]]; then
  git -C "$workspace_dir" pull --ff-only
else
  echo "Workspace is in detached HEAD state; skipping pull." >&2
fi

if [[ -f "$workspace_dir/.gitmodules" ]]; then
  git -C "$workspace_dir" submodule update --init --recursive
fi
