# Jenkins

Jenkins is the leading open source automation server. It supports building, testing and deploying software through hundreds of plugins, from simple scripted jobs to full declarative pipelines defined in a `Jenkinsfile`.

This package uses the Alpine-based LTS image and is tuned to stay predictable on a small server rather than to grow without limit.

## Memory tuning

Jenkins runs on the JVM, which will happily take every byte the host offers. Two independent ceilings are exposed in the install form, and both matter:

- **Java max heap (`-Xmx`)** bounds what the JVM allocates for objects.
- **Container memory limit** is enforced by Docker itself and covers the heap *plus* metaspace, thread stacks, JIT code cache and native buffers.

Set the container limit meaningfully higher than the max heap. The defaults — 512 MB heap inside a 1024 MB container — follow that rule. If you raise the heap, raise the container limit with it, otherwise the kernel OOM-kills Jenkins mid-build instead of the JVM handling the pressure gracefully.

For a build server doing real work, 2048 MB heap in a 4096 MB container is a more realistic starting point. Every field can be changed later from the app settings.

## First start

The setup wizard runs on first boot and prints an initial admin password to the container logs. Open the app logs in Runtipi to read it, then complete the guided setup in the browser.

## Build agents

Jenkins can drive builds on separate machines through agents. The inbound agent port is configurable in the install form; expose it only if you actually attach external agents.

Running builds on the Jenkins controller itself is convenient but shares its memory budget — if builds start getting killed, either raise the limits or move the work onto an agent.
