using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BrokerApi.Models
{
    public class BrokerDatabaseSettings : IBrokerDatabaseSettings
    {
        public string BrokerCollectionName { get; set; }
        public string ConnectionString { get; set; }
        public string DatabaseName { get; set; }
    }

    public interface IBrokerDatabaseSettings
    {
        string BrokerCollectionName { get; set; }
        string ConnectionString { get; set; }
        string DatabaseName { get; set; }
    }
}
