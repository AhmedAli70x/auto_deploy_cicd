3.237.233.22 

git add .; git commit -m 'updates'; git push origin main;
          # python3 -m pip install --user ansible   
postgres.ctpi0szazgsl.us-east-1.rds.amazonaws.com

ssh -i udacity.pem ubuntu@3.231.27.180



prometheus
curl http://3.231.27.180:3030/api/status

udapeople-db.ctpi0szazgsl.us-east-1.rds.amazonaws.comps://kvdb.io/CRbAro9ns95TrR5PYBmunS/
KVDB_BUCKET
sudo systemctl status node_exporter

AKIAVV4YXV6ZKMNKU5UG
lJNRzJrMvH9s2ZOEk9fvmCIcgb8AcUpeHiFNGUFv

setx AWS_ACCESS_KEY_ID AKIAVV4YXV6ZKMNKU5UG
setx AWS_SECRET_ACCESS_KEY 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
setx AWS_DEFAULT_REGION us-east-1

npm install 

export AWS_ACCESS_KEY_ID= $AWS_ACCESS_KEY
export AWS_SECRET_ACCESS_KEY= $AWS_SECRET_KEY
export AWS_DEFAULT_REGION= $AWS_DEFAULT_REGION

{
  "Id": "Policy1678141556268",
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "Stmt1678141542588",
      "Action": "s3:*",
      "Effect": "Allow",
      "Resource": "arn:aws:s3:::udapeople-2434",
      "Principal": "*"
    }
  ]
}

2434

aws cloudformation deploy --template-file cloudfront.yml --stack-name InitialStack --parameter-overrides WorkflowID=2434 --profile default


    export TYPEORM_ENTITIES=./backend/dist/modules/domain/**/*.entity{.ts,.js}
    export TYPEORM_MIGRATIONS_DIR=./backend/dist/migrations
    export TYPEORM_MIGRATIONS=./backend/dist/migrations/*.ts

echo "API_URL=http://3.238.162.222:3030" >> .env


stop and delete pm2 by

remove backend folder by
 sudo pm2  stop default
sudo pm2 delete default
sudo rm -r /home/ubuntu/backend
then run the deploy-backend step again


ssh -i udacity.pem ubuntu@3.238.62.80
prometheus ec2 commands:

sudo useradd --no-create-home prometheus
sudo useradd --no-create-home node_exporter
sudo mkdir /etc/prometheus
sudo mkdir /var/lib/prometheus
wget https://github.com/prometheus/prometheus/releases/download/v2.31.0/prometheus-2.31.0.linux-amd64.tar.gz

tar -xvf prometheus-2.31.0.linux-amd64.tar.gz

cd prometheus-2.31.0.linux-amd64
sudo mv prometheus promtool /usr/local/bin/
sudo mv consoles/ console_libraries/ /etc/prometheus/


wget https://github.com/prometheus/node_exporter/releases/download/v1.3.1/node_exporter-1.3.1.linux-amd64.tar.gz

tar xvfz node_exporter-1.3.1.linux-amd64.tar.gz
cd node_exporter-1.3.1.linux-amd64
sudo mv node_exporter /usr/local/bin/node_exporter
rm -rf node_exporter-1.3.1.linux-amd64.tar.gz  node_exporter-1.3.1.linux-amd64
rm -rf prometheus-2.31.0.linux-amd64  prometheus-2.31.0.linux-amd64.tar.gz

sudo nano /etc/prometheus/prometheus.yml

sudo nano /etc/systemd/system/prometheus.service

[Unit]
Description=Prometheus
Wants=network-online.target
After=network-online.target

[Service]
User=prometheus
Group=prometheus
Type=simple
ExecStart=/usr/local/bin/prometheus \
      --config.file /etc/prometheus/prometheus.yml
      --storage.tsdb.path /var/lib/prometheus/ \
      --web.console.templates=/etc/proemtheus/consoles \
      --web.console.libraries=/etc/prometheus/console_libraries

[Install]
WantedBy=multi-user.target

sudo nano /etc/systemd/system/node_exporter.service

[Unit]
Description=Prometheus Node Exporter Service
After=network.target

[Service]
User=node_exporter
Group=node_exporter
Type=simple
ExecStart=/usr/local/bin/node_exporter

[Install]
WantedBy=multi-user.target

sudo chown prometheus:prometheus /etc/prometheus
sudo chown prometheus:prometheus /usr/local/bin/prometheus
sudo chown prometheus:prometheus /usr/local/bin/promtool

sudo chown -R prometheus:prometheus /etc/prometheus/consoles 
sudo chown -R prometheus:prometheus /etc/prometheus/console_libraries
sudo chown -R prometheus:prometheus /var/lib/prometheus

sudo systemctl daemon-reload
sudo systemctl enable node_exporter
sudo systemctl enable prometheus

sudo systemctl start node_exporter
sudo systemctl start prometheus