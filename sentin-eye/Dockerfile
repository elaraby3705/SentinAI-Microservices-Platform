# 1. Use a lightweight Python base image
FROM python:3.9-slim

# 2. Set the working directory inside the container
WORKDIR /app

# 3. Copy requirements first (for better caching)
COPY requirements.txt .

# 4. Install dependencies
# --no-cache-dir reduces image size
RUN pip install --no-cache-dir -r requirements.txt

# 5. Copy the rest of the application code
COPY . .

# 6. Expose the port the app runs on
EXPOSE 5000

# 7. Define the command to run the app
CMD ["python", "app.py"]