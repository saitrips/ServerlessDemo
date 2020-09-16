dotnet restore
dotnet tool install -g Amazon.Lambda.Tools --framework netcoreapp3.1
dotnet lambda package --configuration Release --framework netcoreapp3.1 --output-package output/csharp_function.zip
zip -r output/python_s3_function.zip lambda-functions/s3copy.py
zip -r output/python_layer_function.zip lambda-functions/LayerTest.py
zip -r output/nodejs_local_function.zip lambda-functions/local-invoke-test.js