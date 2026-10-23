# Travel Planner Workshop Conventions

## Project Overview
We are building a travel planner system consisting of:
1. A Flights MCP Server (FastMCP) — searches and retrieves flight data
2. A Hotels MCP Server (FastMCP) — searches and retrieves hotel data
3. A Strands Agent that orchestrates both MCP servers to plan trips

## Tech Stack
- Python 3.12+
- FastMCP 3.x for MCP servers
- Strands Agents SDK for the orchestrating agent
- Pydantic for data models
- Mock JSON data (no external APIs)

## FastMCP Conventions
- Use `FastMCP` class as the main entry point
- Use `@mcp.tool()` decorator for all tools
- All tools must have type hints and clear docstrings
- Return structured dicts from tools
- Use Pydantic models for complex data structures
- Handle errors gracefully — return error dicts, don't crash

## Code Style
- snake_case for functions and variables
- PascalCase for classes
- Type hints on all function signatures
- Docstrings on all public functions

## Project Structure
Each MCP server should follow:
```
server_name/
├── __init__.py
├── __main__.py        # Entry point
├── server.py          # FastMCP server definition + tools
├── models.py          # Pydantic data models
├── data/
│   └── *.json         # Mock data files
└── requirements.txt
```