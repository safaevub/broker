using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrokerApi.Models
{
    public class Broker
    {
        
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonElement("TechnicalInterfaceDescription")]
        public string TechnicalInterfaceDescription { get; set; }

        public string AuthenticationMechanism { get; set; }

        public string ExposedDataSources { get; set; }

        public string DataUsagePolicies { get; set; }
    }
}



