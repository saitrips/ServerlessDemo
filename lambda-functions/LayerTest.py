import objectpath
import json
import boto3

def lambda_layer_handler(event, context):
    with open('/opt/data/aws-regions.json', 'r') as f:
        regionsObject = json.load(f)
    print("Event :", event)
    obTree = objectpath.Tree(regionsObject)

    sydneyObject = obTree.execute('$.sydney')
    response = sydneyObject
    return {
     'statusCode': 200,
     'body': response,
     'isBase64Encoded': False,
     'headers': {}  
    }