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
workers_root="$repo_root/.workers"
workspace_dir="$workers_root/$workspace_name"

if [[ -e "$workspace_dir" ]]; then
  echo "Workspace already exists: $workspace_dir" >&2
  exit 1
fi

origin_url="$(git -C "$repo_root" remote get-url origin 2>/dev/null || true)"
if [[ -z "$origin_url" ]]; then
  echo "Origin remote not found; cannot clone workspace." >&2
  exit 1
fi

current_branch="$(git -C "$repo_root" rev-parse --abbrev-ref HEAD)"
clone_args=()
if git -C "$repo_root" show-ref --verify --quiet "refs/remotes/origin/$current_branch"; then
  clone_args+=(--branch "$current_branch")
fi

mkdir -p "$workers_root"
git clone "${clone_args[@]}" "$origin_url" "$workspace_dir"

if [[ -f "$workspace_dir/.gitmodules" ]]; then
  git -C "$workspace_dir" submodule update --init --recursive
fi
