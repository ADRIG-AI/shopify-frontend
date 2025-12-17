import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ShopifyConnect = () => {
  const [shopDomain, setShopDomain] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleConnect = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validate shop domain format
    const shopPattern = /^[a-zA-Z0-9][a-zA-Z0-9-]*$/;
    if (!shopPattern.test(shopDomain)) {
      setError('Please enter a valid shop name (e.g., your-store)');
      setLoading(false);
      return;
    }

    const normalizedDomain = `${shopDomain.trim().toLowerCase()}.myshopify.com`;

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`${import.meta.env.VITE_BACKEND_ENDPOINT}/user/shopify/auth`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ shop: normalizedDomain })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to connect to Shopify');
      }

      // Redirect to Shopify OAuth
      window.location.href = data.authUrl;
    } catch (err: any) {
      setError(err.message || 'Connection failed');
      setLoading(false);
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Connect Your Shopify Store</CardTitle>
        <CardDescription>
          Enter your Shopify store name to connect and start analyzing your data
        </CardDescription>
      </CardHeader>
      <CardContent>
        {error && (
          <div className="bg-red-100 text-red-700 px-4 py-2 rounded mb-4">
            {error}
          </div>
        )}
        
        <form onSubmit={handleConnect}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">
              Shopify Store Name
            </label>
            <div className="flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={shopDomain}
                onChange={(e) => setShopDomain(e.target.value)}
                placeholder="your-store"
                required
              />
              <span className="px-3 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-md text-sm text-gray-600">
                .myshopify.com
              </span>
            </div>
          </div>
          
          <Button
            type="submit"
            className="w-full"
            disabled={loading}
          >
            {loading ? 'Connecting...' : 'Connect Shopify Store'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ShopifyConnect;