#!/bin/bash

# ASSETS DASHBOARD GENERATOR
# Generates ASSETS_DASHBOARD.md based on current build artifacts.

OUTPUT_FILE="ASSETS_DASHBOARD.md"
DATE=$(date +"%Y-%m-%d %H:%M:%S")

echo "# ASSETS DASHBOARD" > $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "Generated on: $DATE" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "## Build Matrix" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "| Module | Artifact | Status | Size | Last Modified |" >> $OUTPUT_FILE
echo "|--------|----------|--------|------|---------------|" >> $OUTPUT_FILE

modules=("core" "model" "engine-supercollider" "playback" "dsl" "app-api")

for mod in "${modules[@]}"; do
    # Library JAR
    jar_path="modules/$mod/build/libs/$mod-0.1.0-SNAPSHOT.jar"
    if [ -f "$jar_path" ]; then
        size=$(du -h "$jar_path" | cut -f1)
        modified=$(date -r "$jar_path" +"%Y-%m-%d %H:%M")
        echo "| \`$mod\` | \`$jar_path\` | ✅ OK | $size | $modified |" >> $OUTPUT_FILE
    else
        echo "| \`$mod\` | \`$jar_path\` | ❌ MISSING | - | - |" >> $OUTPUT_FILE
    fi
done

# Special case for app-api runner
runner_path="modules/app-api/build/quarkus-app/quarkus-run.jar"
if [ -f "$runner_path" ]; then
    size=$(du -h "$runner_path" | cut -f1)
    modified=$(date -r "$runner_path" +"%Y-%m-%d %H:%M")
    echo "| \`app-api\` (runner) | \`$runner_path\` | ✅ OK | $size | $modified |" >> $OUTPUT_FILE
else
    echo "| \`app-api\` (runner) | \`$runner_path\` | ❌ MISSING | - | - |" >> $OUTPUT_FILE
fi

# Web & Docs Artifacts
echo "" >> $OUTPUT_FILE
echo "## Web & Docs Artifacts" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "| Component | Artifact | Status | Size | Last Modified |" >> $OUTPUT_FILE
echo "|-----------|----------|--------|------|---------------|" >> $OUTPUT_FILE

static_assets=(
    "Web App:web/apps/app/dist"
    "Docs Site:docs/build/docs-site"
    "Docs Shell:docs/site/dist"
)

for asset in "${static_assets[@]}"; do
    name="${asset%%:*}"
    path="${asset#*:}"
    if [ -d "$path" ] || [ -f "$path" ]; then
        size=$(du -sh "$path" | cut -f1)
        modified=$(date -r "$path" +"%Y-%m-%d %H:%M")
        echo "| $name | \`$path\` | ✅ OK | $size | $modified |" >> $OUTPUT_FILE
    else
        echo "| $name | \`$path\` | ❌ MISSING | - | - |" >> $OUTPUT_FILE
    fi
done

# Docker Images
echo "" >> $OUTPUT_FILE
echo "## Docker Images" >> $OUTPUT_FILE
echo "" >> $OUTPUT_FILE
echo "| Image Name | Status | Created | Size |" >> $OUTPUT_FILE
echo "|------------|--------|---------|------|" >> $OUTPUT_FILE

docker_images=("riddim-app-api:latest" "riddim-web:latest")

for img in "${docker_images[@]}"; do
    if docker image inspect "$img" > /dev/null 2>&1; then
        created=$(docker image inspect "$img" --format '{{.Created}}' | cut -d'T' -f1)
        size_bytes=$(docker image inspect "$img" --format '{{.Size}}')
        # Simple size conversion for bash if numfmt is missing or to keep it simple
        size_mb=$((size_bytes / 1024 / 1024))
        echo "| \`$img\` | ✅ OK | $created | ${size_mb}MB |" >> $OUTPUT_FILE
    else
        echo "| \`$img\` | ❌ MISSING | - | - |" >> $OUTPUT_FILE
    fi
done

echo "" >> $OUTPUT_FILE
echo "---" >> $OUTPUT_FILE
echo "Run \`./scripts/generate_dashboard.sh\` to refresh this dashboard." >> $OUTPUT_FILE
