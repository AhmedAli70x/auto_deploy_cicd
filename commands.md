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

aws sts get-caller-identity

aws cloudformation deploy --template-file cloudfront.yml --stack-name InitialStack --parameter-overrides WorkflowID=2434 --profile default


    export TYPEORM_ENTITIES=./backend/dist/modules/domain/**/*.entity{.ts,.js}
    export TYPEORM_MIGRATIONS_DIR=./backend/dist/migrations
    export TYPEORM_MIGRATIONS=./backend/dist/migrations/*.ts

echo "API_URL=http://3.238.162.222:3030" >> .env


wget https://github.com/prometheus/prometheus/releases/download/v2.19.0/prometheus-2.19.0.linux-amd64.tar.gz
tar xvfz prometheus-2.19.0.linux-amd64.tar.gz

sudo cp prometheus-2.19.0.linux-amd64/prometheus /usr/local/bin
sudo cp prometheus-2.19.0.linux-amd64/promtool /usr/local/bin/
sudo cp -r prometheus-2.19.0.linux-amd64/consoles /etc/prometheus
sudo cp -r prometheus-2.19.0.linux-amd64/console_libraries /etc/prometheus

sudo cp prometheus-2.19.0.linux-amd64/promtool /usr/local/bin/
rm -rf prometheus-2.19.0.linux-amd64.tar.gz prometheus-2.19.0.linux-amd64


wget https://github.com/prometheus/node_exporter/releases/download/v1.5.0/node_exporter-1.5.0.linux-amd64.tar.gz
tar xzf node_exporter-1.5.0.linux-amd64.tar.gz
sudo cp node_exporter-1.5.0.linux-amd64/node_exporter /usr/local/bin/node_exporter
rm -rf node_exporter-1.5.0.linux-amd64.tar.gz node_exporter-1.5.0.linux-amd64

avg(rate(node_cpu_seconds_total{mode!="idle"}[1m])) by (instance)*100
node_memory_Cached_bytes + node_memory_Buffers_bytes + node_memory_MemFree_bytes
node_filesystem_free_bytes{device="/dev/root"} 

[webhook]
https://hooks.slack.com/services/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

global:
  resolve_timeout: 1m
  slack_api_url: 'https://hooks.slack.com/services/B04TXQBLV9C/RpjCS5V09IoO0ygNIq01N7kc'
 
route:
  receiver: 'slack-notifications'
 
receivers:
  - name: 'slack-notifications'
    slack_configs:
    - channel: 'dev-null'
      send_resolved: true


groups:
- name: server_is_down
  rules:
  - alert: server_is_down
    expr: up == 0
    for: 1m
    labels:
      severity: page
    annotations:
      summary: Server(s) are down.
https://hooks.slack.com/services/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

node_memory_MemFree_bytes

curl --insecure  https://kvdb.io/CRbAro9ns95TrR5PYBmunS/migration_4795637
            export SUCCESS=$( curl --insecure  https://kvdb.io/CRbAro9ns95TrR5PYBmunS/migration_4795637 )

            echo $SUCCESS
            if (( $SUCCESS == 1 ));
            then
            echo "ture $SUCCESS "
            fi

route:
  group_by: [Alertname]
  receiver: email-me

receivers:
- name: email-me
  email_configs:
  - to: ahmedali70x@gmail.com
    from: ahmed.atef7x@gmail.com
    smarthost: smtp.gmail.com:587
    auth_username: ahmed.atef7x@gmail.com
    auth_identity: ahmed.atef7x@gmail.com
    auth_password: lktgzxujuhtldaid

stop and delete pm2 by

remove backend folder by
 sudo pm2  stop default
sudo pm2 delete default
sudo rm -r /home/ubuntu/backend
then run the deploy-backend step again


ssh -i udacity.pem ubuntu@100.25.163.187
ssh -i udacity.pem ubuntu@54.87.240.111
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