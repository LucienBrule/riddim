FROM fedora:43

# Install Java 21 (Headless)
RUN dnf install -y java-21-openjdk-headless && dnf clean all

ENV LANGUAGE='en_US:en'

# Set working directory
WORKDIR /deployments

# Copy the quarkus-app directory from the build output
# Note: Paths are relative to the workspace root when building from root
COPY modules/app-api/build/quarkus-app/ /deployments/

EXPOSE 8080
USER 1001

ENTRYPOINT ["java", "-jar", "quarkus-run.jar"]
