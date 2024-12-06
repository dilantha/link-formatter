.PHONY: install build test clean release-major release-minor release-patch

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

# Release targets
release-major: clean install build test
	./bump-version.sh major

release-minor: clean install build test
	./bump-version.sh minor

release-patch: clean install build test
	./bump-version.sh patch

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
	@echo "  make release-major - Release major version"
	@echo "  make release-minor - Release minor version"
	@echo "  make release-patch - Release patch version"
	@echo "  make all         - Install, build, and test"
	@echo "  make help        - Show this help message"
