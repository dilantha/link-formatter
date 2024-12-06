.PHONY: install build test clean bump-major bump-minor bump-patch release

# Default target
all: install build test

# Install dependencies
install:
	pnpm install

# Build the project
build:
	pnpm run build

# Run tests
test:
	pnpm test

# Clean build artifacts
clean:
	rm -rf main.js main.js.map

# Version bump targets
bump-major: clean install build test
	./bump-version.sh major

bump-minor: clean install build test
	./bump-version.sh minor

bump-patch: clean install build test
	./bump-version.sh patch

# Release target
release:
	./release.sh

# Development mode
dev:
	pnpm run dev

# Help target
help:
	@echo "Available targets:"
	@echo "  make install      - Install dependencies"
	@echo "  make build       - Build the project"
	@echo "  make test        - Run tests"
	@echo "  make clean       - Clean build artifacts"
	@echo "  make dev         - Run in development mode"
	@echo "  make bump-major  - Bump major version"
	@echo "  make bump-minor  - Bump minor version"
	@echo "  make bump-patch  - Bump patch version"
	@echo "  make release     - Release the current version"
	@echo "  make all         - Install, build, and test"
	@echo "  make help        - Show this help message"
